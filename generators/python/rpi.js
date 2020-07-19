'use strict';

goog.require('Blockly.Python');
goog.require('Blockly.Extensions');

Blockly.Python.addReservedWords('RPi');

var rpi_gpio_imports = 'import RPi.GPIO'
var rpi_gpiozero_imports = 'import gpiozero'

Blockly.Python['rpi_new_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.PWMLED('+value_pin+',active_high=True, initial_value=0, frequency=100, pin_factory=None)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_new_rgb_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_red_pin = Blockly.Python.valueToCode(block, 'RED_PIN', Blockly.Python.ORDER_ATOMIC);
  var value_green_pin = Blockly.Python.valueToCode(block, 'GREEN_PIN', Blockly.Python.ORDER_ATOMIC);
  var value_blue_pin = Blockly.Python.valueToCode(block, 'BLUE_PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.RGBLED('+value_red_pin+', '+value_green_pin+', '+value_blue_pin+', active_high=True, initial_value=(1, 1, 1), pwm=True, pin_factory=None)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
    
Blockly.Python['rpi_set_rgb_led_colour'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_colour = Blockly.Python.valueToCode(block, 'COLOUR', Blockly.Python.ORDER_ATOMIC);
  var hexColourFunctionName = Blockly.Python.provideFunction_(
        'hex_colour_to_tuple',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(colour_string):',
         '  try:',
         '      if len(colour_string) != 7:',
         '          return (0,0,0)',
         '      else:',
         '          return (int(colour_string[1:3],16)/255,int(colour_string[3:5],16)/255,int(colour_string[5:7],16)/255)',
         '  except:',
         '      print("Colour error, using black")',
         '      return (0,0,0)']);
  var code = value_led + '.color = ' + hexColourFunctionName + '('+value_colour+')\n';
  return code;
};

Blockly.Python['rpi_led_on'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led + '.on()\n';
  return code;
};

Blockly.Python['rpi_led_off'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led + '.off()\n';
  return code;
};

Blockly.Python['rpi_led_toggle'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led + '.toggle()\n';
  return code;
};
