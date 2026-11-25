// Renders a .blockly file with this editor's own blocks and saves a PNG of the
// blocks plus the Python the editor generates from them.
//   node render/render.cjs <file.blockly> <out-folder>
// Expects the repository to be served at http://127.0.0.1:8000/.
const fs = require("node:fs");
const path = require("node:path");
const {chromium} = require("playwright");

const [input, outDir] = process.argv.slice(2);
const name = path.basename(input, path.extname(input));
const xml = fs.readFileSync(input, "utf8");
fs.mkdirSync(outDir, {recursive: true});
const log = [];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({viewport: {width: 1600, height: 1200}, deviceScaleFactor: 2});
  page.on("pageerror", (error) => log.push(`page error: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") log.push(`console ${message.type()}: ${message.text()}`);
  });
  await page.goto("http://127.0.0.1:8000/index.html");
  await page.waitForFunction(() => typeof workspace !== "undefined" && workspace.getTopBlocks);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);

  const result = await page.evaluate((text) => {
    const report = [];
    const dom = Blockly.Xml.textToDom(text);
    // Typed variable fields must repeat the variable's type.
    const typed = {};
    for (const variable of dom.querySelectorAll("variable[type]")) {
      typed[variable.getAttribute("id")] = variable.getAttribute("type");
    }
    for (const field of dom.querySelectorAll("field[name='VAR']")) {
      const type = typed[field.getAttribute("id")];
      if (type && !field.getAttribute("variabletype")) field.setAttribute("variabletype", type);
    }
    const types = new Set([...dom.querySelectorAll("block, shadow")].map((b) => b.getAttribute("type")));
    for (const type of types) {
      if (!Blockly.Blocks[type]) report.push(`missing block type: ${type}`);
      if (!Blockly.Python[type]) report.push(`missing Python generator: ${type}`);
    }
    // Show long "insert code" lines in full instead of cutting them off with "...".
    Blockly.Field.prototype.maxDisplayLength = 120;
    workspace.clear();
    Blockly.Xml.domToWorkspace(dom, workspace);
    return report;
  }, xml);
  log.push(...result);
  await page.waitForTimeout(1500);

  const layout = await page.evaluate(() => {
    const report = [];
    // The editor adds a "Describe this function..." comment icon to new
    // functions. Remove it so the picture only shows the code.
    for (const block of workspace.getAllBlocks(false)) {
      if (block.type.startsWith("procedures_def") && block.getCommentText && block.getCommentText()) {
        block.setCommentText(null);
      }
      if (block.type === "procedures_get_name") report.push(`function reference: ${block.getFieldValue("NAME")}`);
      if (block.getInheritedDisabled && block.getInheritedDisabled()) report.push(`disabled block: ${block.type}`);
    }
    // Functions in a column on the left, the main program to their right.
    const tops = workspace.getTopBlocks(false);
    const functions = tops.filter((b) => b.type.startsWith("procedures_def"));
    const main = tops.filter((b) => !b.type.startsWith("procedures_def"));
    const gap = 40;
    let y = 0;
    let widest = 0;
    for (const block of functions) {
      const at = block.getRelativeToSurfaceXY();
      block.moveBy(0 - at.x, y - at.y);
      const size = block.getHeightWidth();
      y += size.height + gap;
      widest = Math.max(widest, size.width);
    }
    let mainY = 0;
    for (const block of main) {
      const at = block.getRelativeToSurfaceXY();
      block.moveBy(widest + 80 - at.x, mainY - at.y);
      mainY += block.getHeightWidth().height + gap;
    }
    report.push(`top blocks: ${tops.length} (${functions.length} functions)`);
    return report;
  });
  log.push(...layout);

  const code = await page.evaluate(() => Blockly.Python.workspaceToCode(workspace));
  fs.writeFileSync(path.join(outDir, `${name}.py`), code);
  const saved = await page.evaluate(() => Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace)));
  fs.writeFileSync(path.join(outDir, `${name}.blockly`), saved);

  // Show only the blocks: hide the editor's buttons, toolbox and controls.
  await page.addStyleTag({content: `
    #python-container, a.my-button, #copied-alert, .CodeMirror,
    .blocklyToolboxDiv, .blocklyFlyout, .blocklyZoom, .blocklyTrash,
    .blocklyScrollbarHorizontal, .blocklyScrollbarVertical, .blocklyScrollbarBackground { display: none !important; }
    #blocklyDiv { position: fixed !important; left: 0; top: 0; width: 100vw !important; height: 100vh !important; }
    .blocklyMainBackground { fill: #ffffff !important; stroke: none !important; }
  `});
  const size = await page.evaluate(() => {
    workspace.setScale(1);
    const box = workspace.getBlocksBoundingBox();
    return {width: Math.ceil(box.right - box.left), height: Math.ceil(box.bottom - box.top)};
  });
  const padding = 24;
  await page.setViewportSize({width: size.width + 2 * padding + 400, height: size.height + 2 * padding + 400});
  await page.evaluate(() => Blockly.svgResize(workspace));
  await page.waitForTimeout(500);
  const clip = await page.evaluate((pad) => {
    const before = workspace.getCanvas().getBoundingClientRect();
    workspace.translate(workspace.scrollX + pad - before.left, workspace.scrollY + pad - before.top);
    const box = workspace.getCanvas().getBoundingClientRect();
    return {x: 0, y: 0, width: Math.ceil(box.right + pad), height: Math.ceil(box.bottom + pad)};
  }, padding);
  await page.waitForTimeout(500);
  await page.screenshot({path: path.join(outDir, `${name}.png`), clip});
  log.push(`image: ${clip.width} x ${clip.height} CSS pixels at 2x`);

  await browser.close();
  fs.writeFileSync(path.join(outDir, `${name}.log`), log.join("\n") + "\n");
  console.log(log.join("\n"));
})().catch((error) => {
  console.error(error);
  fs.writeFileSync(path.join(outDir, `${name}.log`), log.concat(String(error.stack || error)).join("\n") + "\n");
  process.exit(1);
});
