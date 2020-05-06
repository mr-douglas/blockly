'use strict';

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('brick');

Blockly.Python['ev3_beep'] = function(block) {
  Blockly.Python.definitions_['import_ev3'] = 'from pybricks import ev3brick as brick\nfrom pybricks.ev3devices import (Motor, TouchSensor, ColorSensor, InfraredSensor, UltrasonicSensor, GyroSensor)\nfrom pybricks.parameters import (Port, Stop, Direction, Button, Color, SoundFile, ImageFile, Align)\nfrom pybricks.tools import print, wait, StopWatch\nfrom pybricks.robotics import DriveBase';
  var code = 'brick.sound.beep()\n';
  return code;
};
  