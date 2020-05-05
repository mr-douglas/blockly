'use strict';

goog.require('Blockly.Python');

Blockly.Python['insert_user_code'] = function(block) {
  var text_user_code = block.getFieldValue('user_code');
  var code = text_user_code + '\n';
  return code;
};