'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');
//goog.require('Blockly.Xml');

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
    "type": "tkinter_variables_get_checkbutton",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Checkbutton"],
        "defaultType": "GUI_Checkbutton"
      }
    ],
    "output": "GUI_Checkbutton",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the checkbutton variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_radiobutton",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Radiobutton"],
        "defaultType": "GUI_Radiobutton"
      }
    ],
    "output": "GUI_Radiobutton",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the radiobutton variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_combobox",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Combobox"],
        "defaultType": "GUI_Combobox"
      }
    ],
    "output": "GUI_Combobox",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the combobox variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_variables_get_progressbar",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["GUI_Progressbar"],
        "defaultType": "GUI_Progressbar"
      }
    ],
    "output": "GUI_Progressbar",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the progressbar variable",
    "helpUrl": ""
  },
  {
    "type": "tkinter_set_window_as_root",
    "message0": "set %1 to main window",
    "inputsInline": true,
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
    "type": "tkinter_set_additional_window",
    "message0": "set %1 to as additional window with %2 as main window",
    "inputsInline": true,
    "args0": [
      {
        "type": "input_value",
        "name": "ADDITIONAL_WINDOW",
        "check": "GUI_Window"
      },{
        "type": "input_value",
        "name": "MAIN_WINDOW",
        "check": "GUI_Window"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Create an additional Tkinter.Toplevel window and assign it to the variable",
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
    "inputsInline": true,
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
  },
  {
    "type": "tkinter_window_set_resizable",
    "message0": "make window %1 resizable:",
    "message1": "%1 horizontally and/or",
    "message2": "%1 vertically",
    "args0": [
      {
        "type": "input_value",
        "name": "WINDOW",
        "check": "GUI_Window"
      }
    ],
    "args1": [
    {
      "type": "field_checkbox",
      "name": "RESIZE_X",
      "checked": true
    }
	],
	"args2": [
    {
      "type": "field_checkbox",
      "name": "RESIZE_Y",
      "checked": true
    }
	],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set whether the window can be resized horizontally and vertically",
    "helpUrl": ""
  },
  {
    "type": "tkinter_messagebox",
    "message0": "make a %1 box appear with title %2 and message %3",
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
        "name": "TITLE",
        "check": "String"
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
  },
  {
    "type": "tkinter_ask_dialog",
    "message0": "ask %1 with title %2 and message %3",
    //"inputsInline": true,
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["yes/no", "ASK_YES_NO"],
          ["ok/cancel", "ASK_OK_CANCEL"],
          ["retry/cancel", "ASK_RETRY_CANCEL"],
          ["yes/no/cancel", "ASK_YES_NO_CANCEL"]/*,
          ["question", "ASK_QUESTION"]*/
        ]
      },
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "output": null,
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Show a question dialog and return the user's choice",
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
  },
  {
    "type": "tkinter_combobox_set_values",
    "message0": "set choices in %1 to %2 and default to option %3",
    "args0": [
      {
        "type": "input_value",
        "name": "COMBOBOX",
        "check": "GUI_Combobox"
      },
      {
        "type": "input_value",
        "name": "VALUES"
      },
      {
        "type": "input_value",
        "name": "DEFAULT",
		"check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set the options available in a Combobox",
    "helpUrl": ""
  },
  {
    "type": "tkinter_combobox_set_current",
    "message0": "set selected choice in %1 to option %2",
    "args0": [
      {
        "type": "input_value",
        "name": "COMBOBOX",
        "check": "GUI_Combobox"
      },
      {
        "type": "input_value",
        "name": "OPTION",
		"check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set the options available in a Combobox",
    "helpUrl": ""
  },
  {
    "type": "tkinter_combobox_get_value",
    "message0": "the selected value of %1",
    "args0": [
      {
        "type": "input_value",
        "name": "COMBOBOX",
        "check": "GUI_Combobox"
      }
    ],
    "output": "String",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Get the currently selected value from the Combobox",
    "helpUrl": ""
  },
  {
    "type": "tkinter_progressbar_set_value",
    "message0": "set progress of %1 to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "PROGRESSBAR",
        "check": "GUI_Progressbar"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Set the current value of the Progressbar",
    "helpUrl": ""
  },
  {
    "type": "tkinter_progressbar_start_stop",
    "message0": "%1 indeterminate animation for %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["start", "START"],
          ["stop", "STOP"]
        ]
      },
      {
        "type": "input_value",
        "name": "PROGRESSBAR",
        "check": "GUI_Progressbar"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#555555",
    "tooltip": "Start or stop the indeterminate animation",
    "helpUrl": ""
  },
  {
    "type": "tkinter_simpledialog",
    "message0": "ask for %1 with title %2 and question %3",
    //"inputsInline": true,
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["text", "STRING"],
          ["integer", "INTEGER"],
          ["number", "FLOAT"]
        ]
      },
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "PROMPT",
        "check": "String"
      }
    ],
    "output": null,
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Show a simple input dialog and return what the user entered",
    "helpUrl": ""
  },
  {
    "type": "tkinter_filedialog",
    "message0": "choose a file path to %1 with title %2",
    //"inputsInline": true,
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["open", "OPEN"],
          ["save", "SAVE"]
        ]
      },
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      }
    ],
    "output": "String",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Show a file-open or file-save dialog and return the chosen path",
    "helpUrl": ""
  },
  {
    "type": "tkinter_colorchooser",
    "message0": "choose a colour with title %1",
    //"inputsInline": true,
    "args0": [
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      }
    ],
    "output": "String",
    "inputsInline": true,
    "colour": "#555555",
    "tooltip": "Show a colour picker dialog and return a hex colour string",
    "helpUrl": ""
  },
  {
  "type": "tkinter_window_set_close_command",
  "message0": "when the user tries to close %1, run the function %2",
  "args0": [
    {
      "type": "input_value",
      "name": "WINDOW",
      "check": "GUI_Window"
    },
    {
      "type": "input_value",
      "name": "COMMAND",
      "check": "PROCEDURE"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#555555",
  "tooltip": "Call a procedure when the user closes the window.",
  "helpUrl": ""
},
{
  "type": "tkinter_window_destroy",
  "message0": "close window %1",
  "args0": [
    {
      "type": "input_value",
      "name": "WINDOW",
      "check": "GUI_Window"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#555555",
  "tooltip": "Close and destroy the specified window.",
  "helpUrl": ""
}

 ]);  // END JSON EXTRACT (Do not delete this comment.)

// --- BEGIN: tkinter_add_widget_to_window (block definition)
Blockly.Blocks['tkinter_add_widget_to_window'] = {
  init: function() {
    // Header
    this.appendDummyInput()
        .appendField("Add");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Button","GUI_Entry","GUI_Checkbutton","GUI_Radiobutton","GUI_Combobox","GUI_Progressbar"]);
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
    this.setTooltip("Create a ttk widget, run configuration statements, then apply a layout manager.");
    this.setHelpUrl("");

    this.updateShape_();
  },

  // Add/remove geometry-specific inputs dynamically (per your rule set)
  updateShape_: function() {
    // Remove any existing geometry inputs
    // ["GRID_ROW", "GRID_COLUMN", "PLACE_X", "PLACE_Y", "END"].forEach((name) => {
    ["GRID_ROW", "GRID_COLUMN", "GRID_ROWSPAN", "GRID_COLSPAN", "PLACE_X", "PLACE_Y", "END"].forEach((name) => {
      if (this.getInput(name)) this.removeInput(name);
    });

    const mode = this.getFieldValue("GEOM") || "PACK";

    /*if (mode === "GRID") {
      this.appendValueInput("GRID_ROW").setCheck("Number").appendField("(row");
      this.appendValueInput("GRID_COLUMN").setCheck("Number").appendField(", column");
      const rowInput = this.getInput("GRID_ROW");
      const colInput = this.getInput("GRID_COLUMN");
      if (rowInput?.connection) {
        const shadowRowXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        rowInput.connection.setShadowDom(shadowRowXml);
        // rowInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowRowXml));
      }
      if (colInput?.connection) {
        const shadowColXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">0</field></shadow>');
        colInput.connection.setShadowDom(shadowColXml);
        // colInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowColXml));
      }
    }*/
	if (mode === "GRID") {
      this.appendValueInput("GRID_ROW").setCheck("Number").appendField("(row");
	  this.appendValueInput("GRID_COLUMN").setCheck("Number").appendField(", column");
	  this.appendValueInput("GRID_ROWSPAN").setCheck("Number").appendField(") spanning ");
	  this.appendValueInput("GRID_COLSPAN").setCheck("Number").appendField("row(s) and ");
	  const rowInput = this.getInput("GRID_ROW");
	  const colInput = this.getInput("GRID_COLUMN");
	  const rowspanInput = this.getInput("GRID_ROWSPAN");
	  const colspanInput = this.getInput("GRID_COLSPAN");
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
	  if (rowspanInput?.connection) {
        const shadowRowspanXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">1</field></shadow>');
		rowspanInput.connection.setShadowDom(shadowRowspanXml);
		//colspanInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowColspanXml));
      }
	  if (colspanInput?.connection) {
        const shadowColspanXml = Blockly.Xml.textToDom('<shadow type="math_number"><field name="NUM">1</field></shadow>');
		colspanInput.connection.setShadowDom(shadowColspanXml);
		//colspanInput.connection.setShadowState(Blockly.serialization.blocks.save(shadowColspanXml));
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
    if (mode === "PLACE") {
        this.appendDummyInput("END").appendField(")");
    } else if (mode === "GRID") {
        this.appendDummyInput("END").appendField(" column(s)");
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

// --- BEGIN: shared tkinter prefill helpers
Blockly.Blocks._tkinterPrefillValueInputFromParent = function(block, inputName, getterTypeByVariableType) {
  if (!block.workspace || block.isInFlyout) return;
  if (block._tkinterPrefilled) return;

  const input = block.getInput(inputName);
  if (!input || input.connection.targetBlock()) return;

  const parent = block.getSurroundParent();
  if (!parent || parent.type !== 'tkinter_add_widget_to_window') return;

  const parentWidgetBlock = parent.getInputTargetBlock('WIDGET');
  if (!parentWidgetBlock) return;

  let newGetter = null;
  const varField = parentWidgetBlock.getField('VAR');
  if (varField && typeof varField.getVariable === 'function') {
    const model = varField.getVariable();
    if (model) {
      const varId = model.getId();
      const getterType = getterTypeByVariableType[model.type];
      if (varId && getterType) {
		newGetter = block.workspace.newBlock(getterType);
		const tempVar = newGetter.getField('VAR').getVariable();
		const tempVarId = tempVar ? tempVar.getId() : null;
		newGetter.setFieldValue(varId, 'VAR');
		if (tempVarId && tempVarId !== varId) {
		  block.workspace.deleteVariableById(tempVarId);
		}
      } else {
        const xml = Blockly.Xml.blockToDom(parentWidgetBlock, true);
        newGetter = Blockly.Xml.domToBlock(xml, block.workspace);
      }
    }
  }

  if (newGetter) {
    newGetter.initSvg && newGetter.initSvg();
    newGetter.render && newGetter.render();
    input.connection.connect(newGetter.outputConnection);
    block._tkinterPrefilled = true;
  }
}

Blockly.Blocks._tkinterOnChangePrefillFromParent = function(block, e, prefillFn) {
  if (!block.workspace || block.isInFlyout || !e) return;

  const typesToWatch = new Set([
    Blockly.Events.BLOCK_CREATE,
    Blockly.Events.BLOCK_MOVE,
    Blockly.Events.CHANGE
  ]);
  if (!typesToWatch.has(e.type)) return;

  setTimeout(function() {
    try { prefillFn(); } catch (err) { /* no-op */ }
  }, 0);
}
// --- END: shared tkinter prefill helpers

// --- BEGIN: tkinter_set_widget_text (block definition)
Blockly.Blocks['tkinter_set_widget_text'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Button","GUI_Checkbutton","GUI_Radiobutton"]);
    this.appendDummyInput().appendField("text to");
    this.appendValueInput("TEXT").setCheck("String");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the text of the specified widget.");
    this.setHelpUrl("");
  },

  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Label': 'tkinter_variables_get_label',
      'GUI_Button': 'tkinter_variables_get_button',
      'GUI_Checkbutton': 'tkinter_variables_get_checkbutton',
      'GUI_Radiobutton': 'tkinter_variables_get_radiobutton'
    });
  },

  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
	  self._prefillWidgetFromParent_();
    });
  }
};

// --- BEGIN: tkinter_set_widget_width (block definition)
Blockly.Blocks['tkinter_set_widget_width'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Button","GUI_Entry","GUI_Combobox"]);
    this.appendDummyInput().appendField("width to");
    this.appendValueInput("WIDTH").setCheck("Number");
    this.appendDummyInput().appendField("characters");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the width of the specified widget.");
    this.setHelpUrl("");
  },
  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Label': 'tkinter_variables_get_label',
      'GUI_Button': 'tkinter_variables_get_button',
      'GUI_Entry': 'tkinter_variables_get_entry',
      'GUI_Combobox': 'tkinter_variables_get_combobox'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillWidgetFromParent_();
    });
  }
};
// --- END: tkinter_set_widget_width (block definition)

// --- BEGIN: tkinter_set_widget_anchor (block definition)
Blockly.Blocks['tkinter_set_widget_anchor'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck("GUI_Label");
    this.appendDummyInput().appendField("content position to").appendField(new Blockly.FieldDropdown([
      ["left", "w"],
      ["centre", "center"],
      ["right", "e"]
    ]), "ANCHOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set where the label content appears when the label is wider than its text.");
    this.setHelpUrl("");
  },
  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Label': 'tkinter_variables_get_label'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillWidgetFromParent_();
    });
  }
};
// --- END: tkinter_set_widget_anchor (block definition)

// --- BEGIN: tkinter_set_widget_justify (block definition)
Blockly.Blocks['tkinter_set_widget_justify'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Entry","GUI_Combobox"]);
    this.appendDummyInput().appendField("text alignment to").appendField(new Blockly.FieldDropdown([
      ["left", "left"],
      ["centre", "center"],
      ["right", "right"]
    ]), "JUSTIFY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set how text is aligned inside the widget.");
    this.setHelpUrl("");
  },
  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Label': 'tkinter_variables_get_label',
      'GUI_Entry': 'tkinter_variables_get_entry',
      'GUI_Combobox': 'tkinter_variables_get_combobox'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillWidgetFromParent_();
    });
  }
};
// --- END: tkinter_set_widget_justify (block definition)

// --- BEGIN: tkinter_set_widget_font (block definition)
Blockly.Blocks['tkinter_set_widget_font'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Label","GUI_Entry","GUI_Combobox"]);
    this.appendDummyInput().appendField("font to");
    this.appendValueInput("FACE").setCheck("String");
    this.appendDummyInput().appendField("size");
    this.appendValueInput("SIZE").setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the font face and size of the specified widget.");
    this.setHelpUrl("");
  },
  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Label': 'tkinter_variables_get_label',
      'GUI_Entry': 'tkinter_variables_get_entry',
      'GUI_Combobox': 'tkinter_variables_get_combobox'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillWidgetFromParent_();
    });
  }
};
// --- END: tkinter_set_widget_font (block definition)

// --- BEGIN: tkinter_set_label_wraplength (block definition)
Blockly.Blocks['tkinter_set_label_wraplength'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("LABEL").setCheck("GUI_Label");
    this.appendDummyInput().appendField("wrap length to");
    this.appendValueInput("WRAPLENGTH").setCheck("Number");
    this.appendDummyInput().appendField("pixels");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the maximum line length in pixels before label text wraps.");
    this.setHelpUrl("");
  },
  _prefillLabelFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'LABEL', {
      'GUI_Label': 'tkinter_variables_get_label'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillLabelFromParent_();
    });
  }
};
// --- END: tkinter_set_label_wraplength (block definition)

// --- BEGIN: tkinter_set_entry_combobox_readonly (block definition)
Blockly.Blocks['tkinter_set_entry_combobox_readonly'] = {
  init: function() {
    this.appendDummyInput().appendField("Set");
    this.appendValueInput("WIDGET").setCheck(["GUI_Entry","GUI_Combobox"]);
    this.appendDummyInput().appendField("to").appendField(new Blockly.FieldDropdown([
      ["read only", "READONLY"],
      ["normal", "NORMAL"]
    ]), "STATE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set an Entry or Combobox to readonly or normal.");
    this.setHelpUrl("");
  },
  _prefillWidgetFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'WIDGET', {
      'GUI_Entry': 'tkinter_variables_get_entry',
      'GUI_Combobox': 'tkinter_variables_get_combobox'
    });
  },
  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillWidgetFromParent_();
    });
  }
};
// --- END: tkinter_set_entry_combobox_readonly (block definition)

// --- BEGIN: tkinter_set_button_command (block definition)
Blockly.Blocks['tkinter_set_button_command'] = {
  init: function() {
    this.appendDummyInput().appendField("when");
    this.appendValueInput("BUTTON").setCheck("GUI_Button");
    this.appendDummyInput().appendField("is clicked");
    this.appendValueInput("COMMAND").setCheck("PROCEDURE");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Set the command to be run when the button is clicked.");
    this.setHelpUrl("");
  },

  _prefillButtonFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'BUTTON', {
      'GUI_Button': 'tkinter_variables_get_button'
    });
  },

  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillButtonFromParent_();
    });
  }
};

// --- BEGIN: tkinter_button_set_enabled (block definition)
Blockly.Blocks['tkinter_button_set_enabled'] = {
  init: function() {
    this.appendDummyInput().appendField("set");
    this.appendValueInput("BUTTON").setCheck("GUI_Button");
    this.appendDummyInput().appendField("to");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown([
      ["enabled", "ENABLED"],
      ["disabled", "DISABLED"]
    ]), "STATE");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#555555");
    this.setTooltip("Enable or disable the specified button.");
    this.setHelpUrl("");
  },

  _prefillButtonFromParent_: function() {
    Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'BUTTON', {
      'GUI_Button': 'tkinter_variables_get_button'
    });
  },

  onchange: function(e) {
    const self = this;
    Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
      self._prefillButtonFromParent_();
    });
  }
};

Blockly.Blocks['tkinter_entry_insert_at_end']._prefillEntryFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'ENTRY', {
    'GUI_Entry': 'tkinter_variables_get_entry'
  });
};

Blockly.Blocks['tkinter_entry_insert_at_end'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillEntryFromParent_();
  });
};

Blockly.Blocks['tkinter_entry_delete_from_start']._prefillEntryFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'ENTRY', {
    'GUI_Entry': 'tkinter_variables_get_entry'
  });
};

Blockly.Blocks['tkinter_entry_delete_from_start'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillEntryFromParent_();
  });
};

Blockly.Blocks['tkinter_combobox_set_values']._prefillComboboxFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'COMBOBOX', {
    'GUI_Combobox': 'tkinter_variables_get_combobox'
  });
};

Blockly.Blocks['tkinter_combobox_set_values'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillComboboxFromParent_();
  });
};

Blockly.Blocks['tkinter_combobox_set_current']._prefillComboboxFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'COMBOBOX', {
    'GUI_Combobox': 'tkinter_variables_get_combobox'
  });
};

Blockly.Blocks['tkinter_combobox_set_current'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillComboboxFromParent_();
  });
};

Blockly.Blocks['tkinter_progressbar_set_value']._prefillProgressbarFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'PROGRESSBAR', {
    'GUI_Progressbar': 'tkinter_variables_get_progressbar'
  });
};

Blockly.Blocks['tkinter_progressbar_set_value'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillProgressbarFromParent_();
  });
};

Blockly.Blocks['tkinter_progressbar_start_stop']._prefillProgressbarFromParent_ = function() {
  Blockly.Blocks._tkinterPrefillValueInputFromParent(this, 'PROGRESSBAR', {
    'GUI_Progressbar': 'tkinter_variables_get_progressbar'
  });
};

Blockly.Blocks['tkinter_progressbar_start_stop'].onchange = function(e) {
  const self = this;
  Blockly.Blocks._tkinterOnChangePrefillFromParent(this, e, function() {
    self._prefillProgressbarFromParent_();
  });
};
