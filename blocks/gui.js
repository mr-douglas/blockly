'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.Xml');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Tkinter GUI blocks
  {
    "type": "tkinter_variables_get_window",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Window"],
        "defaultType": "GUI_Window"
      }
    ],
    "output": "GUI_Window",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the window variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_entry_get_text",
    "message0": "the text in %1",
    "args0": [
      {
        "type": "input_value",
        "name": "ENTRY",
        "check": "GUI_Entry"
      }
    ],
    "output": "String",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the text from the specified Entry widget",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_entry",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Entry"],
        "defaultType": "GUI_Entry"
      }
    ],
    "output": "GUI_Entry",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the entry variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_label",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Label"],
        "defaultType": "GUI_Label"
      }
    ],
    "output": "GUI_Label",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the label variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_button",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Button"],
        "defaultType": "GUI_Button"
      }
    ],
    "output": "GUI_Button",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the button variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_set_window_as_root",
    "message0": "set %1 to main window",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "check": "GUI_Window"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Create the main/root Tkinter window and assign it to the variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_set_window_as_secondary",
    "message0": "set %1 as a secondary window",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "check": "GUI_Window"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Create a Toplevel window and assign it to the variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_window_mainloop",
    "message0": "start event loop for %1",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "check": "GUI_Window"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": "#555555",
    "tooltip": "Call mainloop() on the specified window",
    "helpUrl": ""
  },
  {
    "type": "tkinter_window_set_dimensions",
    "message0": "set size of window %1 width %2 height %3",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "align": "RIGHT",
        "check": "GUI_Window"
      },
      {
        "type": "input_value",
        "name": "WIDTH",
        "align": "RIGHT",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "HEIGHT",
        "align": "RIGHT",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set the width and height of the specified window",
    "helpUrl": ""
  },
  {
    "type": "tkinter_window_set_title",
    "message0": "set title of window %1 to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "check": "GUI_Window"
      },
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set the width and height of the specified window",
    "helpUrl": ""
  }

  ,
  {
    "type": "tkinter_messagebox",
    "message0": "make a %1 box appear with message %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["info", "INFO"],
          ["warning", "WARNING"],
          ["error", "ERROR"]
        ]
      },
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Show a messagebox (info, warning or error) with the given text",
    "helpUrl": ""
  }

  ,
  {
    "type": "tkinter_entry_insert_at_end",
    "message0": "insert %1 at the end of %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ENTRY",
        "check": "GUI_Entry"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Insert text at the start of the Entry widget",
    "helpUrl": ""
  },
  {
    "type": "tkinter_entry_delete_from_start",
    "message0": "delete all text from %1",
    "args0": [
      {
        "type": "input_value",
        "name": "ENTRY",
        "check": "GUI_Entry"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Delete from index 0 to tkinter.END for the Entry widget",
    "helpUrl": ""
  }

 ]);  // END JSON EXTRACT (Do not delete this comment.)

// --- BEGIN: tkinter_add_widget_to_window (block definition)
Blockly.Blocks['tkinter_add_widget_to_window'] = {
  init: function() {
    // Header
    this.appendDummyInput()
        .appendField("Add");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Button","GUI_Entry"]);
    this.appendDummyInput().appendField("to window");
    this.appendValueInput("WINDOW").setCheck("GUI_Window");

    // C-shaped config area
    this.appendStatementInput("DO").setCheck(null).appendField("and");

    // Geometry manager selector
    this.appendDummyInput("GEOM_HDR")
        .appendField("and use")
        .appendField(new Blockly.FieldDropdown([
          ["pack", "PACK"],
          ["grid", "GRID"],
          ["place", "PLACE"]
        ]), "GEOM")
        .appendField("method to position it");

    // Keep header compact; statement input will still be on its own line
    this.setInputsInline(true);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Create ttk.Label, run configuration statements, then apply a layout manager.");
    this.setHelpUrl("");

    this.updateShape_();
  },

  // Add/remove geometry-specific inputs dynamically (per your rule set)
  updateShape_: function() {
    // Remove any existing geometry inputs
    ["GRID_ROW", "GRID_COLUMN", "PLACE_X", "PLACE_Y", "CLOSE_PARENTHESIS"].forEach((name) => {
      if (this.getInput(name)) this.removeInput(name);
    });

    const mode = this.getFieldValue("GEOM") || "PACK";

    if (mode === "GRID") {
      this.appendValueInput("GRID_ROW").setCheck("Number").appendField("(row");
      this.appendValueInput("GRID_COLUMN").setCheck("Number").appendField(", column");
      const rowInput = this.getInput("GRID_ROW");
      const colInput = this.getInput("GRID_COLUMN");
      if (rowInput?.connection) {
        const shadowRowXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        rowInput.connection.setShadowDom(shadowRowXml);
        //rowInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowRowXml));
      }
      if (colInput?.connection) {
        const shadowColXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        colInput.connection.setShadowDom(shadowColXml);
        //colInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowColXml));
      }
    } else if (mode === "PLACE") {
      this.appendValueInput("PLACE_X").setCheck("Number").appendField("(x");
      this.appendValueInput("PLACE_Y").setCheck("Number").appendField(", y");
      const xInput = this.getInput("PLACE_X");
      const yInput = this.getInput("PLACE_Y");
      if (xInput?.connection) {
        const shadowXXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        xInput.connection.setShadowDom(shadowXXml);
        //xInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowXXml));
      }
      if (yInput?.connection) {
        const shadowYXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        yInput.connection.setShadowDom(shadowYXml);
        //yInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowYXml));
      }
    }
    if (mode === "GRID" || mode === "PLACE") {
        this.appendDummyInput("CLOSE_PARENTHESIS").appendField(")");
    }
    // PACK: no extra inputs
  },

  // Persist the selected geometry mode
  mutationToDom: function() {
    const container = document.createElement('mutation');
    container.setAttribute('geom', this.getFieldValue('GEOM') || "PACK");
    return container;
  },
  domToMutation: function(xml) {
    const geom = xml.getAttribute('geom') || "PACK";
    this.setFieldValue(geom, "GEOM");
    this.updateShape_();
  },

  // React to dropdown changes
  onchange: function(e) {
    if (!this.workspace || !e) return;
    if (e.type === Blockly.Events.BLOCK_CHANGE &&
        e.blockId === this.id && e.name === "GEOM") {
      this.updateShape_();
    }
  }
};
// --- END: tkinter_add_widget_to_window (block definition)

// --- BEGIN: tkinter_set_widget_text (block definition)
Blockly.Blocks['tkinter_set_widget_text'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Button"]);
    this.appendDummyInput().appendField("text to");
    this.appendValueInput("TEXT").setCheck("String");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the text of the specified widget.");
    this.setHelpUrl("");
  },

  /**
   * Try to prefill WIDGET from the nearest surrounding parent
   * 'tkinter_add_widget_to_window' if WIDGET is empty.
   */
  _prefillLabelFromParent_: function() {
    if (!this.workspace || this.isInFlyout) return;
    if (this._labelPrefilled) return; // guard: do once

    const myLabelInput = this.getInput('WIDGET');
    if (!myLabelInput || myLabelInput.connection.targetBlock()) return; // already filled

    // Is this block inside our target parent?
    const parent = this.getSurroundParent();
    if (!parent || parent.type !== 'tkinter_add_widget_to_window') return;

    // What is the parent's label value block?
    const parentWidgetBlock = parent.getInputTargetBlock('WIDGET');
    if (!parentWidgetBlock) return;

    // If the parent carries a GUI_Label variable getter, copy its variable id.
    // Your getter block type is 'tkinter_variables_get_label' with field 'VAR'.
    let varId = null;
    let newGetter = null;
    const varField = parentWidgetBlock.getField('VAR');
    if (varField && typeof varField.getVariable === 'function') {
      const model = varField.getVariable();
      if (model) {
          varId = model.getId();
        if (varId) {
          // Create a *real* getter block bound to the same variable id.
          if (model.type == "GUI_Label") newGetter = this.workspace.newBlock('tkinter_variables_get_label');
          if (model.type == "GUI_Button") newGetter = this.workspace.newBlock('tkinter_variables_get_button');
          newGetter.setFieldValue(varId, 'VAR');   // set by id to keep it robust
        } else {
          // Fallback: shallow-clone the parent's value block (covers rare cases).
          const xml = Blockly.Xml.blockToDom(parentWidgetBlock, /*opt_noId*/ true);
          newGetter = Blockly.Xml.domToBlock(xml, this.workspace);
        }
      }
    }


    // Render and connect into our WIDGET input.
    if (newGetter) {
      newGetter.initSvg && newGetter.initSvg();
      newGetter.render && newGetter.render();
      myLabelInput.connection.connect(newGetter.outputConnection);
      this._labelPrefilled = true;
    }
  },

  /**
   * Listen for create/move/parent changes and prefill once.
   */
  onchange: function(e) {
    if (!this.workspace || this.isInFlyout || !e) return;

    // Only react to events that affect parentage/placement of this block.
    const typesToWatch = new Set([
      Blockly.Events.BLOCK_CREATE,
      Blockly.Events.BLOCK_MOVE,
      Blockly.Events.CHANGE
    ]);
    if (!typesToWatch.has(e.type)) return;

    // Small debounce: run after Blockly finishes any sync updates.
    // This avoids running too early while connections are still changing.
    const self = this;
    setTimeout(function() {
      try { self._prefillLabelFromParent_(); } catch (err) { /* no-op */ }
    }, 0);
  }
};

// --- BEGIN: tkinter_set_button_command (block definition)
Blockly.Blocks['tkinter_set_button_command'] = {
  init: function() {
    this.appendDummyInput().appendField("when");
    this.appendValueInput("BUTTON").setCheck("GUI_Button");
    this.appendDummyInput().appendField("is clicked");
    this.appendValueInput("COMMAND").setCheck("PROCEDURE");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the command to be run when the button is clicked.");
    this.setHelpUrl("");
  },

  /**
   * Try to prefill BUTTON from the nearest surrounding parent
   * 'tkinter_add_widget_to_window' if BUTTON is empty.
   */
  _prefillButtonFromParent_: function() {
    if (!this.workspace || this.isInFlyout) return;
    if (this._labelPrefilled) return; // guard: do once

    const myButtonInput = this.getInput('BUTTON');
    if (!myButtonInput || myButtonInput.connection.targetBlock()) return; // already filled

    // Is this block inside our target parent?
    const parent = this.getSurroundParent();
    if (!parent || parent.type !== 'tkinter_add_widget_to_window') return;

    // What is the parent's label value block?
    const parentWidgetBlock = parent.getInputTargetBlock('WIDGET');
    if (!parentWidgetBlock) return;

    // If the parent carries a GUI_Button variable getter, copy its variable id.
    // Your getter block type is 'tkinter_variables_get_label' with field 'VAR'.
    let varId = null;
    let newGetter = null;
    const varField = parentWidgetBlock.getField('VAR');
    if (varField && typeof varField.getVariable === 'function') {
      const model = varField.getVariable();
      if (model) {
          varId = model.getId();
        if (varId) {
          // Create a *real* getter block bound to the same variable id.
          if (model.type == "GUI_Button") newGetter = this.workspace.newBlock('tkinter_variables_get_button');
          if (model.type == "GUI_Entry") newGetter = this.workspace.newBlock('tkinter_variables_get_entry');
          newGetter.setFieldValue(varId, 'VAR');   // set by id to keep it robust
        } else {
          // Fallback: shallow-clone the parent's value block (covers rare cases).
          const xml = Blockly.Xml.blockToDom(parentWidgetBlock, /*opt_noId*/ true);
          newGetter = Blockly.Xml.domToBlock(xml, this.workspace);
        }
      }
    }


    // Render and connect into our BUTTON input.
    if (newGetter) {
      newGetter.initSvg && newGetter.initSvg();
      newGetter.render && newGetter.render();
      myButtonInput.connection.connect(newGetter.outputConnection);
      this._labelPrefilled = true;
    }
  },

  /**
   * Listen for create/move/parent changes and prefill once.
   */
  onchange: function(e) {
    if (!this.workspace || this.isInFlyout || !e) return;

    // Only react to events that affect parentage/placement of this block.
    const typesToWatch = new Set([
      Blockly.Events.BLOCK_CREATE,
      Blockly.Events.BLOCK_MOVE,
      Blockly.Events.CHANGE
    ]);
    if (!typesToWatch.has(e.type)) return;

    // Small debounce: run after Blockly finishes any sync updates.
    // This avoids running too early while connections are still changing.
    const self = this;
    setTimeout(function() {
      try { self._prefillButtonFromParent_(); } catch (err) { /* no-op */ }
    }, 0);
  }
};