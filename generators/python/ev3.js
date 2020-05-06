'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('brick');
  
Blockly.Python['ev3_beep'] = function(block) {
  var value_frequency = Blockly.Python.valueToCode(block, 'FREQUENCY', Blockly.Python.ORDER_ATOMIC);
  var value_duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var dropdown_time_units = block.getFieldValue('TIME_UNITS');
  var value_volume = Blockly.Python.valueToCode(block, 'VOLUME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_ev3'] = 'from pybricks import ev3brick as brick\nfrom pybricks.ev3devices import (Motor, TouchSensor, ColorSensor, InfraredSensor, UltrasonicSensor, GyroSensor)\nfrom pybricks.parameters import (Port, Stop, Direction, Button, Color, SoundFile, ImageFile, Align)\nfrom pybricks.tools import print, wait, StopWatch\nfrom pybricks.robotics import DriveBase';
  var code = 'brick.sound.beep(' + value_frequency + ', ' + value_duration;
  if (dropdown_time_units == 'SECONDS') {
    code = code + '*1000';
  }
  code = code + ', ' + value_volume + ')\n';
  return code;
};  