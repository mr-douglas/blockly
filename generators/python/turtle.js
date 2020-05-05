'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('turtle');


Blockly.Python['turtle_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "";
  var value_name = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || 0;
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  switch (dropdown_direction) {
    case 'FORWARD':
      dir = 'forward';
      break;
    case 'BACKWARD':
      dir = 'backward';
      break;
    default:
      throw Error('Unknown turtle movement operator: ' + operator);
  }
  var code = 'turtle.' + dir + "("+value_name+")\n";
  return code;
};

Blockly.Python['turtle_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "";
  var value_name = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || 0;
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  switch (dropdown_direction) {
    case 'LEFT':
      dir = 'left';
      break;
    case 'RIGHT':
      dir = 'right';
      break;
    default:
      throw Error('Unknown turtle movement operator: ' + operator);
  }
  var code = 'turtle.' + dir + "("+value_name+")\n";
  return code;
};

Blockly.Python['turtle_turn_left'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "left";
  var number_angle = block.getFieldValue('ANGLE');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.' + dir + "("+number_angle+")\n";
  return code;
};

Blockly.Python['turtle_turn_right'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "right";
  var number_angle = block.getFieldValue('ANGLE');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.' + dir + "("+number_angle+")\n";
  return code;
};
