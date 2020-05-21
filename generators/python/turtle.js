'use strict';

goog.require('Blockly.Python');
goog.require('Blockly.Extensions');

Blockly.Python.addReservedWords('turtle');


Blockly.Python['turtle_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "";
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || 0;
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
  var code = 'turtle.' + dir + "("+value_distance+")\n";
  return code;
};

Blockly.Python['turtle_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dir = "";
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || 0;
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
  var code = 'turtle.' + dir + "("+value_angle+")\n";
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

Blockly.Python['turtle_pen_up_down'] = function(block) {
  var dropdown_pen_state = block.getFieldValue('pen_state');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  if(dropdown_pen_state=="UP"){
    var code = 'turtle.penup()\n';
  }
  else{
    var code = 'turtle.pendown()\n'; 
  }
  return code;
};

Blockly.Python['turtle_pen_colour'] = function(block) {
  var value_pen_colour = Blockly.Python.valueToCode(block, 'pen_colour', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.pencolor(' + value_pen_colour + ')\n';
  return code;
};

Blockly.Python['turtle_fill_colour'] = function(block) {
  var value_fill_colour = Blockly.Python.valueToCode(block, 'fill_colour', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.fillcolor(' + value_fill_colour + ')\n';
  return code;
};

Blockly.Python['turtle_pen_fill_colour'] = function(block) {
  var dropdown_pen_or_fill = block.getFieldValue('pen_or_fill');
  var value_colour = Blockly.Python.valueToCode(block, 'colour', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var pen_or_fill = "";
  if(dropdown_pen_or_fill == "PEN"){
    pen_or_fill = "pen";
  }
  else{
    pen_or_fill = "fill";
  }
  var code = 'turtle.' + pen_or_fill + 'color(' + value_colour + ')\n';
  return code;
};

Blockly.Python['turtle_begin_fill'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.begin_fill()\n';
  return code;
};

Blockly.Python['turtle_end_fill'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.end_fill()\n';
  return code;
};

Blockly.Python['turtle_begin_end_fill'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var dropdown_begin_or_end = block.getFieldValue('begin_or_end');
  var code = '';
  if(dropdown_begin_or_end=="BEGIN"){
    code = 'turtle.begin_fill()\n';
  } else if(dropdown_begin_or_end=="END"){
    code = 'turtle.end_fill()\n';  
  }
  return code;
};

Blockly.Python['turtle_goto'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);  
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.goto(' + value_x + ',' + value_y + ')\n';
  return code;
};

Blockly.Python['turtle_set_speed'] = function(block) {
  var number_speed = block.getFieldValue('SPEED');  
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.speed(' + number_speed + ')\n';
  return code;
};

Blockly.Python['turtle_set_pen_size'] = function(block) {
  var number_pen_size = block.getFieldValue('PEN_SIZE');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.pensize(' + number_pen_size + ')\n';
  return code;
};

Blockly.Python['turtle_set_direction_four'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var new_heading = 0;
  switch (dropdown_direction){
    case 'RIGHT':
      new_heading = 0;
      break;
    case 'UP':
      new_heading = 90;
      break;
    case 'LEFT':
      new_heading = 180;
      break;
    case 'DOWN':
      new_heading = 270;
      break;
    default:
      throw Error('Unknown turtle movement operator: ' + operator);  
  }
  var code = "turtle.setheading(" + new_heading + ")\n";
  return code;
};

Blockly.Python['turtle_set_direction_angle'] = function(block) {
  var angle_direction = block.getFieldValue('DIRECTION');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = "turtle.setheading(" + angle_direction + ")\n";
  return code;
};

Blockly.Python['turtle_set_direction'] = function(block) {
  var value_direction = Blockly.Python.valueToCode(block, 'DIRECTION', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = "turtle.setheading(" + value_direction + ")\n";
  return code;
};

Blockly.Python['turtle_get_coord'] = function(block) {
  var dropdown_x_or_y = block.getFieldValue('X_OR_Y');
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var x_or_y = 0;
  if (dropdown_x_or_y == 'Y'){
    x_or_y = 1;
  }
  var code = 'turtle.position()[' + x_or_y +']';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['turtle_show'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.showturtle()\n';
  return code;
};

Blockly.Python['turtle_hide'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.hideturtle()\n';
  return code;
};