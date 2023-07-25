'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('buildhat');

var bht_imports = 'import buildhat'

Blockly.Python['bht_new_motor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.Motor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_motor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_motor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['bht_motor_run_for_seconds'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  var checkbox_blocking = block.getFieldValue('BLOCKING') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var blocking_bool = "";
  if(checkbox_blocking){
    blocking_bool = "True";
  } else {
    blocking_bool = "False";
  }
  code = code + ".run_for_seconds("+value_time+", speed="+value_speed+", blocking="+blocking_bool+")\n";
  return code;
};

Blockly.Python['bht_motor_run_for_rotations'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_rotations = Blockly.Python.valueToCode(block, 'ROTATIONS', Blockly.Python.ORDER_ATOMIC);
  var checkbox_blocking = block.getFieldValue('BLOCKING') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var blocking_bool = "";
  if(checkbox_blocking){
    blocking_bool = "True";
  } else {
    blocking_bool = "False";
  }
  code = code + ".run_for_rotations("+value_rotations+", speed="+value_speed+", blocking="+blocking_bool+")\n";
  return code;
};

Blockly.Python['bht_motor_run_for_degrees'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_degrees = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC);
  var checkbox_blocking = block.getFieldValue('BLOCKING') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var blocking_bool = "";
  if(checkbox_blocking){
    blocking_bool = "True";
  } else {
    blocking_bool = "False";
  }
  code = code + ".run_for_degrees("+value_degrees+", speed="+value_speed+", blocking="+blocking_bool+")\n";
  return code;
};

Blockly.Python['bht_motor_run_to_position'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_position = Blockly.Python.valueToCode(block, 'POSITION', Blockly.Python.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var checkbox_blocking = block.getFieldValue('BLOCKING') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var blocking_bool = "";
  if(checkbox_blocking){
    blocking_bool = "True";
  } else {
    blocking_bool = "False";
  }
  code = code + ".run_to_position("+value_position+", speed="+value_speed+", blocking="+blocking_bool+", direction='"+dropdown_direction.toLowerCase()+"')\n";
  return code;
};

Blockly.Python['bht_motor_run_to_position_angle'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var number_position = block.getFieldValue('POSITION');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var checkbox_blocking = block.getFieldValue('BLOCKING') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var blocking_bool = "";
  if(checkbox_blocking){
    blocking_bool = "True";
  } else {
    blocking_bool = "False";
  }
  code = code + ".run_to_position("+number_position+", speed="+value_speed+", blocking="+blocking_bool+", direction='"+dropdown_direction.toLowerCase()+"')\n";
  return code;
};

Blockly.Python['bht_motor_start'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  code = code + ".start(speed="+value_speed+")\n";
  return code;
};

Blockly.Python['bht_motor_stop'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  code = code + ".stop()\n";
  return code;
};

Blockly.Python['bht_motor_get_aposition'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".get_aposition()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_motor_get_speed'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".get_speed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};











Blockly.Python['bht_new_motor_pair'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_left_port = block.getFieldValue('LEFT_PORT');
  var dropdown_right_port = block.getFieldValue('RIGHT_PORT');
  var code = 'buildhat.MotorPair("' + dropdown_left_port + '","' + dropdown_right_port + '")';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bht_variables_get_motor_pair'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_motor_pair'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_color_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.ColorSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_color_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_color_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_color_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.ColorDistanceSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_color_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_color_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.DistanceSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_distance_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_force_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.ForceSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_force_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_force_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_light'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.Light("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_light'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_light'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_matrix'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.Matrix("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_matrix'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_matrix'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.MotionSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};











Blockly.Python['bht_new_tilt_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'buildhat.TiltSensor("'+dropdown_port+'")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_get_tilt_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bht_variables_set_tilt_sensor'] = function(block) {
  Blockly.Python.definitions_['import_buildhat'] = bht_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};