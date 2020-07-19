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
  var code = value_led + '.color = ' + value_colour + '\n';
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

Blockly.Python['rpi_led_is_lit'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.is_lit';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_led_get_value'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.value';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_led_set_value'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.value = value_value\n';
  return code;
};

Blockly.Python['rpi_led_blink'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_n = Blockly.Python.valueToCode(block, 'N', Blockly.Python.ORDER_ATOMIC);
  var value_on_time = Blockly.Python.valueToCode(block, 'ON_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_off_time = Blockly.Python.valueToCode(block, 'OFF_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_in_time = Blockly.Python.valueToCode(block, 'FADE_IN_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_out_time = Blockly.Python.valueToCode(block, 'FADE_OUT_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_not_background = Blockly.Python.valueToCode(block, 'NOT_BACKGROUND', Blockly.Python.ORDER_ATOMIC);
  var run_in_background = "True";
  if(value_not_background=="true")
  {
    run_in_background = "False";
  } 
  var code = value_led+'.blink(on_time='+value_on_time+', off_time='+value_off_time+', fade_in_time='+value_fade_in_time+', fade_out_time='+value_fade_out_time+', n='+value_n+', background='+run_in_background+')';
  return code;
};

Blockly.Python['rpi_rgb_led_blink'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_n = Blockly.Python.valueToCode(block, 'N', Blockly.Python.ORDER_ATOMIC);
  var value_on_time = Blockly.Python.valueToCode(block, 'ON_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_off_time = Blockly.Python.valueToCode(block, 'OFF_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_in_time = Blockly.Python.valueToCode(block, 'FADE_IN_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_out_time = Blockly.Python.valueToCode(block, 'FADE_OUT_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_on_color = Blockly.Python.valueToCode(block, 'ON_COLOR', Blockly.Python.ORDER_ATOMIC);
  var value_off_color = Blockly.Python.valueToCode(block, 'OFF_COLOR', Blockly.Python.ORDER_ATOMIC);
  var value_not_background = Blockly.Python.valueToCode(block, 'NOT_BACKGROUND', Blockly.Python.ORDER_ATOMIC);
  var run_in_background = "True";
  if(value_not_background=="true")
  {
    run_in_background = "False";
  }
  var code = value_led+'.blink(on_time='+value_on_time
  +', off_time='+value_off_time
  +', fade_in_time='+value_fade_in_time
  +', fade_out_time='+value_fade_out_time
  +', on_color='+value_on_color
  +', off_color='+value_off_color
  +', n='+value_n+', background='+run_in_background
  +')';
  return code;
};

Blockly.Python['colour_tuple'] = function(block) {
  var number_red = block.getFieldValue('RED');
  var number_green = block.getFieldValue('GREEN');
  var number_blue = block.getFieldValue('BLUE');
  var code = '('+number_red+','+number_green+','+number_blue+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['hex_colour_to_tuple'] = function(block) {
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
  var code = hexColourFunctionName + '('+value_colour+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};