'use strict';

goog.require('Blockly.Python');
goog.require('Blockly.Extensions');

Blockly.Python.addReservedWords('RPi');

var rpi_imports = 'import RPi.GPIO'

  //Blockly.Python.definitions_['import_rpi_gpio'] = rpi_imports;