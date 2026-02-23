'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('turtle');
// Reserve tkinter related names so they aren't used for user variables.
// We avoid the abbreviation 'tk' and use the full module name 'tkinter'.
Blockly.Python.addReservedWords('tkinter,ttk');
var tkinter_imports = 'import tkinter\nimport tkinter.ttk'




// --- Tkinter GUI generators ---



Blockly.Python['tkinter_variables_get_window'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_set_window_as_root'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if (value_window == "") {
    code = "#"
  }
  code = value_window + ' = tkinter.Tk()\n';
  return code;
};

Blockly.Python['tkinter_set_window_as_secondary'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if (value_window == "") {
    code = "#"
  }
  code = value_window + ' = tkinter.Toplevel()\n';
  return code;
};

Blockly.Python['tkinter_window_set_dimensions'] = function(block) {
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC) || '200';
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC) || '200';
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = "";
  if(value_window==""){
    code = "#";
  }
  code = code + value_window + '.geometry(str(' + value_width + ') + "x" + str(' + value_height + '))\n';
  return code;
};

Blockly.Python['tkinter_window_set_title'] = function(block) {
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = "";
  if(value_window==""){
    code = "#";
  }
  code = code + value_window + '.title(' + value_title + ')\n';
  return code;
};

Blockly.Python['tkinter_window_mainloop'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_window==""){
    code = "#";
  }
  code = code + value_window + ".mainloop()";
  return code;
};

Blockly.Python['tkinter_variables_get_label'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_button'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_entry'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_checkbutton'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_radiobutton'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_combobox'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tkinter_variables_get_progressbar'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// --- BEGIN: tkinter_add_widget_to_window (Python generator)
Blockly.Python['tkinter_add_widget_to_window'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  // Resolve names/expressions
  const value_widget = Blockly.Python.valueToCode(block, 'WIDGET', Blockly.Python.ORDER_NONE);
  const value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_NONE);
  var code = "";
  var comment_symbol = "";
  if(value_widget=="" || value_window==""){
    comment_symbol = "#";
  }
  code += comment_symbol;

  const widgetGetter = block.getInputTargetBlock && block.getInputTargetBlock('WIDGET');
  if (widgetGetter.type == 'tkinter_variables_get_label') code += `${value_widget} = tkinter.ttk.Label(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_button') code += `${value_widget} = tkinter.ttk.Button(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_entry') code += `${value_widget} = tkinter.ttk.Entry(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_checkbutton') code += `${value_widget} = tkinter.ttk.Checkbutton(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_radiobutton') code += `${value_widget} = tkinter.ttk.Radiobutton(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_combobox') code += `${value_widget} = tkinter.ttk.Combobox(${value_window})\n`;
  if (widgetGetter.type == 'tkinter_variables_get_progressbar') code += `${value_widget} = tkinter.ttk.Progressbar(${value_window})\n`;

  // Handle config blocks connected
  const first = block.getInputTargetBlock && block.getInputTargetBlock('DO');
  if (first) {
      let childCode = Blockly.Python.blockToCode(first);
      if (Array.isArray(childCode)) childCode = childCode[0] || '';
      if (comment_symbol && childCode) {
          childCode = childCode.replace(/^/gm, comment_symbol);
      }
      code += childCode;
  }



  
  code += comment_symbol
  const geom = block.getFieldValue('GEOM') || 'PACK';

  if (geom === 'PACK') {
    code += `${value_widget}.pack()\n`;
  } else if (geom === 'GRID') {
    const row = (Blockly.Python.valueToCode(block, 'GRID_ROW', Blockly.Python.ORDER_NONE) || '').trim();
    const col = (Blockly.Python.valueToCode(block, 'GRID_COLUMN', Blockly.Python.ORDER_NONE) || '').trim();
    const args = [];
    if (row) args.push(`row=${row}`);
    if (col) args.push(`column=${col}`);
    code += `${value_widget}.grid(${args.join(', ')})\n`;
  } else if (geom === 'PLACE') {
    const x = (Blockly.Python.valueToCode(block, 'PLACE_X', Blockly.Python.ORDER_NONE) || '').trim();
    const y = (Blockly.Python.valueToCode(block, 'PLACE_Y', Blockly.Python.ORDER_NONE) || '').trim();
    const args = [];
    if (x) args.push(`x=${x}`);
    if (y) args.push(`y=${y}`);
    code += `${value_widget}.place(${args.join(', ')})\n`;
  }

  return code;
};
// --- END: tkinter_add_widget_to_window (Python generator)

// --- BEGIN: tkinter_set_widget_text (Python generator)
Blockly.Python['tkinter_set_widget_text'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_widget = Blockly.Python.valueToCode(block, 'WIDGET', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
  var code = '';
  if (value_widget == "") {
    code = '#';
  }
  code = code + value_widget + '.config(text=' + value_text + ')\n';
  return code;
};
// --- END: tkinter_set_widget_text (Python generator)

// --- BEGIN: tkinter_set_button_command (Python generator)
Blockly.Python['tkinter_set_button_command'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_ATOMIC);
  var value_command = Blockly.Python.valueToCode(block, 'COMMAND', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (value_button == "" || value_command == "") {
    code = '#';
  }
  code = code + value_button + '.config(command=' + value_command + ')\n';
  return code;
};
// --- END: tkinter_set_button_command (Python generator)

// --- BEGIN: tkinter_entry_get_text (Python generator)
Blockly.Python['tkinter_entry_get_text'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_entry = Blockly.Python.valueToCode(block, 'ENTRY', Blockly.Python.ORDER_ATOMIC);
  var code = value_entry + '.get()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// --- END: tkinter_entry_get_text (Python generator)

Blockly.Python['tkinter_entry_insert_at_end'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  var value_entry = Blockly.Python.valueToCode(block, 'ENTRY', Blockly.Python.ORDER_MEMBER) || '[]';
  // Hardcoded to insert at index 0
  return value_entry + '.insert(tkinter.END, ' + value_text + ')\n';
};

Blockly.Python['tkinter_entry_delete_from_start'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_entry = Blockly.Python.valueToCode(block, 'ENTRY', Blockly.Python.ORDER_MEMBER) || '[]';
  return value_entry + '.delete(0, tkinter.END)\n';
};

Blockly.Python['tkinter_messagebox'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_messagebox'] = 'import tkinter.messagebox as messagebox';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Message Box'";
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  var mode = block.getFieldValue('MODE') || 'INFO';
  var fn = 'showinfo';
  if (mode == 'WARNING') fn = 'showwarning';
  if (mode == 'ERROR') fn = 'showerror';
  var code = 'messagebox.' + fn + '(title=' + title + ', message=' + text + ')\n';
  return code;
};

Blockly.Python['tkinter_ask_dialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_messagebox'] = 'import tkinter.messagebox as messagebox';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Message Box'";
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  var mode = block.getFieldValue('MODE') || 'ASK_YES_NO';
  var fn = 'askyesno';
  if (mode == 'ASK_OK_CANCEL') fn = 'askokcancel';
  if (mode == 'ASK_RETRY_CANCEL') fn = 'askretrycancel';
  if (mode == 'ASK_YES_NO_CANCEL') fn = 'askyesnocancel';
  if (mode == 'ASK_QUESTION') fn = 'askquestion';
  var code = 'messagebox.' + fn + '(title=' + title + ', message=' + text + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_simpledialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_simpledialog'] = 'import tkinter.simpledialog as simpledialog';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Input'";
  var prompt = Blockly.Python.valueToCode(block, 'PROMPT', Blockly.Python.ORDER_NONE) || "''";
  var mode = block.getFieldValue('MODE') || 'STRING';
  var fn = 'askstring';
  if (mode == 'INTEGER') fn = 'askinteger';
  if (mode == 'FLOAT') fn = 'askfloat';
  var code = 'simpledialog.' + fn + '(title=' + title + ', prompt=' + prompt + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_filedialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_filedialog'] = 'import tkinter.filedialog as filedialog';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Select a file'";
  var mode = block.getFieldValue('MODE') || 'OPEN';
  var fn = 'askopenfilename';
  if (mode == 'SAVE') fn = 'asksaveasfilename';
  var code = 'filedialog.' + fn + '(title=' + title + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_colorchooser'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_colorchooser'] = 'import tkinter.colorchooser as colorchooser';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Choose a colour'";
  var code = 'colorchooser.askcolor(title=' + title + ')[1]';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_button_set_enabled'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('STATE') || 'ENABLED';
  var value_state = state == 'DISABLED' ? "'disabled'" : "'normal'";
  var code = '';
  if (value_button == '') {
    code = '#';
  }
  code = code + value_button + '.config(state=' + value_state + ')\n';
  return code;
};

Blockly.Python['tkinter_combobox_set_values'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_combobox = Blockly.Python.valueToCode(block, 'COMBOBOX', Blockly.Python.ORDER_MEMBER) || '[]';
  var value_values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_NONE) || '[]';
  return value_combobox + '["values"] = ' + value_values + '\n';
};

Blockly.Python['tkinter_combobox_get_text'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_combobox = Blockly.Python.valueToCode(block, 'COMBOBOX', Blockly.Python.ORDER_ATOMIC);
  var code = value_combobox + '.get()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_progressbar_set_value'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_progressbar = Blockly.Python.valueToCode(block, 'PROGRESSBAR', Blockly.Python.ORDER_MEMBER) || '[]';
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '0';
  return value_progressbar + '["value"] = ' + value_value + '\n';
};

Blockly.Python['tkinter_progressbar_start_stop'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_progressbar = Blockly.Python.valueToCode(block, 'PROGRESSBAR', Blockly.Python.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'START';
  if (mode == 'STOP') return value_progressbar + '.stop()\n';
  return value_progressbar + '.start()\n';
};
