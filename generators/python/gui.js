'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('turtle');
// Reserve tkinter related names so they aren't used for user variables.
// We avoid the abbreviation 'tk' and use the full module name 'tkinter'.
Blockly.Python.addReservedWords('tkinter,ttk');
var tkinter_imports = 'import tkinter\nimport tkinter.ttk';
var tkinter_messagebox_import = 'import tkinter.messagebox';




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

Blockly.Python['tkinter_set_additional_window'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_additional_window = Blockly.Python.valueToCode(block, 'ADDITIONAL_WINDOW', Blockly.Python.ORDER_ATOMIC);
  var value_main_window = Blockly.Python.valueToCode(block, 'MAIN_WINDOW', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if (value_additional_window == "" || value_main_window == "") {
    code = "#"
  }
  code = value_additional_window + ' = tkinter.Toplevel(' + value_main_window + ')\n';
  return code;
};

Blockly.Python['tkinter_window_set_dimensions'] = function(block) {
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = "";
  if(value_window=="" || value_width=="" ||  value_height==""){
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
  if(value_window==""||value_title==""){
    code = "#";
  }
  code = code + value_window + '.title(' + value_title + ')\n';
  return code;
};

Blockly.Python['tkinter_window_set_resizable'] = function(block) {
  var value_window = Blockly.Python.valueToCode(block, 'WINDOW', Blockly.Python.ORDER_ATOMIC);
  var checkbox_resize_x = block.getFieldValue('RESIZE_X') == 'TRUE';
  var checkbox_resize_y = block.getFieldValue('RESIZE_Y') == 'TRUE';
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var code = "";
  if(value_window==""){
    code = "#";
  }
  var resize_x = 'False';
  var resize_y = 'False';
  if (checkbox_resize_x){
	  resize_x = 'True';
  }
  if (checkbox_resize_y){
	  resize_y = 'True';
  }
  code = code + value_window + '.resizable(' + resize_x + ',' + resize_y + ')\n';
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
  if (widgetGetter.type == 'tkinter_variables_get_checkbutton') code += `${value_widget} = tkinter.ttk.Checkbutton(${value_window})\n${value_widget}.set(False)\n`;
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
  var code = '';
  if (value_entry == '') {
	  code = '#';
  }
  code = value_entry + '.get()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// --- END: tkinter_entry_get_text (Python generator)

Blockly.Python['tkinter_entry_insert_at_end'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  var value_entry = Blockly.Python.valueToCode(block, 'ENTRY', Blockly.Python.ORDER_MEMBER);
  var code = '';
  if (value_entry == "") {
    code = '#';
  }
  code = code + value_entry + '.insert(tkinter.END, ' + value_text + ')\n';
  return code;
};

Blockly.Python['tkinter_entry_delete_from_start'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_entry = Blockly.Python.valueToCode(block, 'ENTRY', Blockly.Python.ORDER_MEMBER);
  var code = '';
  if (value_entry == "") {
    code = '#';
  }
  code = code + value_entry + '.delete(0, tkinter.END)\n';
  return code;
};

Blockly.Python['tkinter_messagebox'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_messagebox'] = tkinter_messagebox_import;
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE);
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
  var mode = block.getFieldValue('MODE') || 'INFO';
  var fn = 'showinfo';
  if (mode == 'WARNING') fn = 'showwarning';
  if (mode == 'ERROR') fn = 'showerror';
  var code = '';
  if (title == '' || text == '') {
	  code = '#'
  }
  code = code + 'tkinter.messagebox.' + fn + '(title=' + title + ', message=' + text + ')\n';
  return code;
};

Blockly.Python['tkinter_ask_dialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_messagebox'] = tkinter_messagebox_import;
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Message Box'";
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || "''";
  var mode = block.getFieldValue('MODE') || 'ASK_YES_NO';
  var fn = 'askyesno';
  if (mode == 'ASK_OK_CANCEL') fn = 'askokcancel';
  if (mode == 'ASK_RETRY_CANCEL') fn = 'askretrycancel';
  if (mode == 'ASK_YES_NO_CANCEL') fn = 'askyesnocancel';
  if (mode == 'ASK_QUESTION') fn = 'askquestion';
  var code = 'tkinter.messagebox.' + fn + '(title=' + title + ', message=' + text + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_simpledialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_simpledialog'] = 'import tkinter.simpledialog';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Input'";
  var prompt = Blockly.Python.valueToCode(block, 'PROMPT', Blockly.Python.ORDER_NONE) || "''";
  var mode = block.getFieldValue('MODE') || 'STRING';
  var fn = 'askstring';
  if (mode == 'INTEGER') fn = 'askinteger';
  if (mode == 'FLOAT') fn = 'askfloat';
  var code = 'tkinter.simpledialog.' + fn + '(title=' + title + ', prompt=' + prompt + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_filedialog'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_filedialog'] = 'import tkinter.filedialog';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Select a file'";
  var mode = block.getFieldValue('MODE') || 'OPEN';
  var fn = 'askopenfilename';
  if (mode == 'SAVE') fn = 'asksaveasfilename';
  var code = 'tkinter.filedialog.' + fn + '(title=' + title + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_colorchooser'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  Blockly.Python.definitions_['tkinter_colorchooser'] = 'import tkinter.colorchooser';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_NONE) || "'Choose a colour'";
  var code = 'tkinter.colorchooser.askcolor(title=' + title + ')[1]';
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
  var value_combobox = Blockly.Python.valueToCode(block, 'COMBOBOX', Blockly.Python.ORDER_MEMBER);
  var value_values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_NONE);
  var value_default = Blockly.Python.valueToCode(block, 'DEFAULT', Blockly.Python.ORDER_NONE);
  var code = '';
  if (value_combobox == '' || value_values == '' || value_default == '') {
	  code = '#';
  }
  code = code + value_combobox + '["values"] = ' + value_values + '\n';
  code = code + value_combobox + '.current(' + value_default + '-1)\n';
  return code;
};

Blockly.Python['tkinter_combobox_set_current'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_combobox = Blockly.Python.valueToCode(block, 'COMBOBOX', Blockly.Python.ORDER_MEMBER);
  var value_option = Blockly.Python.valueToCode(block, 'OPTION', Blockly.Python.ORDER_NONE);
  var code = '';
  if (value_combobox == '' || value_option == '') {
	  code = '#';
  }
  code = code + value_combobox + '.current(' + value_option + '-1)\n';
  return code;
};

Blockly.Python['tkinter_combobox_get_value'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_combobox = Blockly.Python.valueToCode(block, 'COMBOBOX', Blockly.Python.ORDER_ATOMIC);
  var code = value_combobox + '.get()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['tkinter_progressbar_set_value'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_progressbar = Blockly.Python.valueToCode(block, 'PROGRESSBAR', Blockly.Python.ORDER_MEMBER);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = '';
  if (value_progressbar == '' || value_value == '') {
	  code = '#';
  }
  code = code + value_progressbar + '["value"] = ' + value_value + '\n';
  return code;
};

Blockly.Python['tkinter_progressbar_start_stop'] = function(block) {
  Blockly.Python.definitions_['tkinter_imports'] = tkinter_imports;
  var value_progressbar = Blockly.Python.valueToCode(block, 'PROGRESSBAR', Blockly.Python.ORDER_MEMBER);
  var mode = block.getFieldValue('MODE') || 'START';
  var code = '';
  if (value_progressbar == '') {
	  code = '#';
  }
  if (mode == 'START'){
	  code = code + value_progressbar + '.start()\n';
  }
  else if (mode == 'STOP'){
	  code = code + value_progressbar + '.stop()\n';
  }
  return code;
};
