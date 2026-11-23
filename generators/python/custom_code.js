'use strict';

goog.require('Blockly.Python');

Blockly.Python['import_user_library'] = function(block) {
  var library = (block.getFieldValue('LIBRARY') || '').trim();
  if (!library) {
    Blockly.Python.definitions_['import_user_library_empty'] = '#import ';
    // This is a statement generator.  An empty string means “no inline code
    // here, continue with the next block”; returning null ends the stack.
    return '';
  }
  var definitionName = 'import_user_library_' + library;
  Blockly.Python.definitions_[definitionName] = 'import ' + library;
  // Imports are hoisted through definitions_, so continue with the stack.
  return '';
};

Blockly.Python['insert_user_code'] = function(block) {
  var text_user_code = block.getFieldValue('user_code');
  Blockly.Python.definitions_['custom_code'] = "#You've added your own code";
  var code = text_user_code + '\n';
  return code;
};
