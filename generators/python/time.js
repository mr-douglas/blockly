'use strict';

goog.require('Blockly.Python');
goog.require('Blockly.Extensions');

Blockly.Python.addReservedWords('time');


Blockly.Python['time_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_secs = Blockly.Python.valueToCode(block, 'SECS', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep('+value_secs+')\n';
  return code;
};

Blockly.Python['time_get_current_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.time()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};