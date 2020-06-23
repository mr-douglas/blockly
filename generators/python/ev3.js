'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('ev3');
var ev3_imports = '#!/usr/bin/env pybricks-micropython\nfrom pybricks.hubs import EV3Brick\nfrom pybricks.ev3devices import (Motor, TouchSensor, ColorSensor, InfraredSensor, UltrasonicSensor, GyroSensor)\nfrom pybricks.parameters import Port, Stop, Direction, Button, Color\nfrom pybricks.tools import wait, StopWatch, DataLog\nfrom pybricks.robotics import DriveBase\nfrom pybricks.media.ev3dev import SoundFile, ImageFile\n\nev3 = EV3Brick()\n';
var motors = ["","","",""];

Blockly.Python['ev3_beep'] = function(block) {
  var value_frequency = Blockly.Python.valueToCode(block, 'FREQUENCY', Blockly.Python.ORDER_ATOMIC);
  var value_duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var dropdown_time_units = block.getFieldValue('TIME_UNITS');
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = 'ev3.speaker.beep(frequency='+value_frequency+', duration=' + value_duration;
  if (dropdown_time_units == 'SECONDS') {
    code = code + '*1000';
  }
  code = code +')\n';
  return code;
};  

Blockly.Python['ev3_set_volume'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var dropdown_which = block.getFieldValue('WHICH');
  var value_volume = Blockly.Python.valueToCode(block, 'VOLUME', Blockly.Python.ORDER_ATOMIC);
  var which = "'_all_'";
  Blockly.Python.definitions_['import_ev3'] = ev3_imports
  if (dropdown_which=='BEEP'){
    which="'Beep'";
  }else if (dropdown_which=='PCM'){
    which="'PCM'";
  }
  var code = "ev3.speaker.set_volume("+value_volume+", which="+which+")\n";
  return code;
};



Blockly.Python['ev3_set_up'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor_a = Blockly.Python.valueToCode(block, 'MOTOR_A', Blockly.Python.ORDER_ATOMIC);
  var value_motor_b = Blockly.Python.valueToCode(block, 'MOTOR_B', Blockly.Python.ORDER_ATOMIC);
  var value_motor_c = Blockly.Python.valueToCode(block, 'MOTOR_C', Blockly.Python.ORDER_ATOMIC);
  var value_motor_d = Blockly.Python.valueToCode(block, 'MOTOR_D', Blockly.Python.ORDER_ATOMIC);
  var value_sensor_one = Blockly.Python.valueToCode(block, 'SENSOR_ONE', Blockly.Python.ORDER_ATOMIC);
  var value_sensor_two = Blockly.Python.valueToCode(block, 'SENSOR_TWO', Blockly.Python.ORDER_ATOMIC);
  var value_sensor_three = Blockly.Python.valueToCode(block, 'SENSOR_THREE', Blockly.Python.ORDER_ATOMIC);
  var value_sensor_four = Blockly.Python.valueToCode(block, 'SENSOR_FOUR', Blockly.Python.ORDER_ATOMIC);
  var code = ""
  if(value_motor_a!=""){
    code = code + value_motor_a + ' = Motor(Port.A, positive_direction=Direction.CLOCKWISE, gears=None)\n';
  }
  if(value_motor_b!=""){
    code = code + value_motor_b + ' = Motor(Port.B, positive_direction=Direction.CLOCKWISE, gears=None)\n';
  }
  if(value_motor_c!=""){
    code = code + value_motor_c + ' = Motor(Port.C, positive_direction=Direction.CLOCKWISE, gears=None)\n';
  }
  if(value_motor_d!=""){
    code = code + value_motor_d + ' = Motor(Port.D, positive_direction=Direction.CLOCKWISE, gears=None)\n';
  }
  if(value_sensor_one!=""){
    if(value_sensor_one.substring(value_sensor_one.length - 1)!=")"){
      code = code + "#"
    }
    code = code + value_sensor_one.substring(1).replace('port','Port.S1')+"\n";
  }
  if(value_sensor_two!=""){
    if(value_sensor_two.substring(value_sensor_two.length - 1)!=")"){
      code = code + "#"
    }
    code = code + value_sensor_two.substring(1).replace('port','Port.S2')+"\n";
  }
  if(value_sensor_three!=""){
    if(value_sensor_three.substring(value_sensor_three.length - 1)!=")"){
      code = code + "#"
    }
    code = code + value_sensor_three.substring(1).replace('port','Port.S3')+"\n";
  }
  if(value_sensor_four!=""){
    if(value_sensor_four.substring(value_sensor_four.length - 1)!=")"){
      code = code + "#"
    }
    code = code + value_sensor_four.substring(1).replace('port','Port.S4')+"\n";
  }
  return code;
};

Blockly.Python['ev3_variables_get_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_variables_get_and_set_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_sensor_type = Blockly.Python.valueToCode(block, 'SENSOR_TYPE', Blockly.Python.ORDER_ATOMIC);
  var code = "#" + Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_sensor_type.substring(1);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_variables_get_motor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_run'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = "";
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".run(" +value_speed +")\n";
  return code;
};

Blockly.Python['ev3_touch_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = '#TouchSensor(port)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_colour_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = '#ColorSensor(port)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_ultrasonic_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var code = '#UltrasonicSensor(port)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_gyro_sensor'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var code = '#GyroSensor(port, positive_direction=Direction.'+dropdown_direction+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_run_time'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_time_units = block.getFieldValue('TIME_UNITS');
  var dropdown_then = block.getFieldValue('THEN');
  var checkbox_wait = block.getFieldValue('WAIT') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var seconds_or_microseconds = "";
  if(dropdown_time_units == 'SECONDS'){
    seconds_or_microseconds = " * 1000";
  }
  var wait_bool = "";
  if(checkbox_wait){
    wait_bool = "True";
  } else {
    wait_bool = "False";
  }
  code = code + ".run_time("+value_speed+", "+value_time+seconds_or_microseconds+", then=Stop."+dropdown_then+", wait="+wait_bool+")\n";
  return code;
};

Blockly.Python['ev3_motor_run_angle'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var dropdown_then = block.getFieldValue('THEN');
  var checkbox_wait = block.getFieldValue('WAIT') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var wait_bool = "";
  if(checkbox_wait){
    wait_bool = "True";
  } else {
    wait_bool = "False";
  }
  code = code + ".run_angle("+value_speed+", "+value_angle+", then=Stop."+dropdown_then+", wait="+wait_bool+")\n";
  return code;
};

Blockly.Python['ev3_motor_run_target'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_target_angle = Blockly.Python.valueToCode(block, 'TARGET_ANGLE', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('WAIT') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var wait_bool = "";
  if(checkbox_wait){
    wait_bool = "True";
  } else {
    wait_bool = "False";
  }
  code = code + ".run_target("+value_speed+", "+value_target_angle+", then=Stop."+dropdown_then+", wait="+wait_bool+")\n";
  return code;
};

Blockly.Python['ev3_motor_run_until_stalled'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var dropdown_then = block.getFieldValue('THEN');
  var checkbox_limit = block.getFieldValue('LIMIT') == 'TRUE';
  var code = '';
  if(value_motor==""){
    code = code + "#";
  } else {
    code = code + value_motor;
  }
  var duty_number = 'None';
  if(checkbox_limit)
  { 
    duty_number = Blockly.Python.valueToCode(block, 'DUTY_LIMIT', Blockly.Python.ORDER_ATOMIC);
  }
  code = code + ".run_until_stalled("+value_speed+", then=Stop."+dropdown_then+", duty_limit="+duty_number+")\n";
  return code;
};

Blockly.Python['ev3_touch_sensor_pressed'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_sensor==""){
    code = "#";
  }
  code = code + value_sensor + ".pressed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_speed'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".speed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_angle'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".angle()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_reset_angle'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + ".reset_angle("+value_angle+")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_motor_stop_brake_hold'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var dropdown_stop_brake_or_hold = block.getFieldValue('STOP_BRAKE_OR_HOLD');
  var value_motor = Blockly.Python.valueToCode(block, 'MOTOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  var stop_method = "stop";
  if(dropdown_stop_brake_or_hold=="BRAKE"){
    stop_method = "brake";
  } else if(dropdown_stop_brake_or_hold=="HOLD"){
    stop_method = "hold";
  }
  if(value_motor==""){
    code = "#";
  }
  code = code + value_motor + "."+stop_method+"()\n";
  return code;
};

Blockly.Python['ev3_ultrasonic_sensor_distance'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_ultrasonic_sensor = Blockly.Python.valueToCode(block, 'ULTRASONIC_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var checkbox_silent = block.getFieldValue('SILENT') == 'TRUE';
  var code = "";
  if(value_ultrasonic_sensor==""){
    code = "#";
  }
  var silent = 'False';
  if(checkbox_silent){
    silent = 'True';
  }
  code = code + value_ultrasonic_sensor + ".distance(silent="+silent+")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_gyro_sensor_speed'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_gyro_sensor = Blockly.Python.valueToCode(block, 'GYRO_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_gyro_sensor==""){
    code = "#";
  }
  code = code + value_gyro_sensor + ".speed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_gyro_angle_speed'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_gyro_sensor = Blockly.Python.valueToCode(block, 'GYRO_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_gyro_sensor==""){
    code = "#";
  }
  code = code + value_gyro_sensor + ".angle()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_gyro_sensor_reset_angle'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_gyro_sensor = Blockly.Python.valueToCode(block, 'GYRO_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_gyro_sensor==""){
    code = "#";
  }
  code = code + value_gyro_sensor + ".reset_angle("+value_angle+")";
  return code;
};

Blockly.Python['ev3_color_sensor_color'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_color_sensor = Blockly.Python.valueToCode(block, 'COLOR_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_color_sensor==""){
    code = "#";
  }
  code = code + value_color_sensor + ".color()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_color_sensor_ambient'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_color_sensor = Blockly.Python.valueToCode(block, 'COLOR_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_color_sensor==""){
    code = "#";
  }
  code = code + value_color_sensor + ".ambient()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_color_sensor_reflection'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var value_color_sensor = Blockly.Python.valueToCode(block, 'COLOR_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_color_sensor==""){
    code = "#";
  }
  code = code + value_color_sensor + ".reflection()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_color'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = ev3_imports;
  var colour_color = block.getFieldValue('COLOR');
  var code = '';
  if(colour_color=='#7f7f7f') {
    code = 'None';
  } else {
    code = 'COLOR';
    switch (colour_color) {
      case '#000000':
        code = code + '.Black';
        break;
      case '#0000ff':
        code = code + '.Blue';
        break;
      case '#00cc00':
        code = code + '.Green';
        break;
      case '#ffff00':
        code = code + '.Yellow';
        break;
      case '#ff0000':
        code = code + '.Red';
        break;
      case '#ffffff':
        code = code + '.White';
        break;
      case '#d2691e':
        code = code + '.Brown';
        break;
      }
    }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['ev3_rgb'] = function(block) {
  var dropdown_rgb = block.getFieldValue('RGB');
  var value_color_sensor = Blockly.Python.valueToCode(block, 'COLOR_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  if(value_color_sensor==""){
    code = "#";
  }
  code = code + value_color_sensor + ".rgb()";
  switch (dropdown_rgb){
    case "RED":
      code = code + [0];
      break;
    case "GREEN":
      code = code + [1];
      break;
    case "BLUE":
      code = code + [2];
      break;
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};