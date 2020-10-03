'use strict';

goog.require('Blockly.Python');
goog.require('Blockly.Extensions');

Blockly.Python.addReservedWords('RPi');
Blockly.Python.addReservedWords('gpiozero');
Blockly.Python.addReservedWords('time');

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
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_colour = Blockly.Python.valueToCode(block, 'COLOUR', Blockly.Python.ORDER_ATOMIC);
  var code = value_led + '.color = ' + value_colour + '\n';
  if(value_led=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_on_off'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_on_off = block.getFieldValue('ON_OFF');
  var code = "";
  if (dropdown_on_off == "ON")
  {
    code = value_component + '.on()\n';
  } else {
    code = value_component + '.off()\n';
  }
  if(value_component=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_toggle'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = value_component + '.toggle()\n';
  if(value_component=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_led_is_lit'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.is_lit';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_led_get_value'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.value';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_led_set_value'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_led+'.value = '+value_value+'\n';
  if(value_led=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_led_blink'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_n = Blockly.Python.valueToCode(block, 'N', Blockly.Python.ORDER_ATOMIC);
  var value_on_time = Blockly.Python.valueToCode(block, 'ON_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_off_time = Blockly.Python.valueToCode(block, 'OFF_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_in_time = Blockly.Python.valueToCode(block, 'FADE_IN_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_fade_out_time = Blockly.Python.valueToCode(block, 'FADE_OUT_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_not_background = Blockly.Python.valueToCode(block, 'NOT_BACKGROUND', Blockly.Python.ORDER_ATOMIC);
  var run_in_background = "True";
  if(value_not_background=="True")
  {
    run_in_background = "False";
  }
  var code = value_led+'.blink(on_time='+value_on_time+', off_time='+value_off_time+', fade_in_time='+value_fade_in_time+', fade_out_time='+value_fade_out_time+', n='+value_n+', background='+run_in_background+')\n';
  if(value_led=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_rgb_led_blink'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
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
  if(value_not_background=="True")
  {
    run_in_background = "False";
  }
  var code = value_led+'.blink(on_time='+value_on_time+', off_time='+value_off_time+', fade_in_time='+value_fade_in_time+', fade_out_time='+value_fade_out_time+', on_color='+value_on_color+', off_color='+value_off_color+', n='+value_n+', background='+run_in_background+')\n';
  if(value_led=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['colour_tuple'] = function(block) {
  var number_red = block.getFieldValue('RED');
  var number_green = block.getFieldValue('GREEN');
  var number_blue = block.getFieldValue('BLUE');
  var code = '('+number_red+','+number_green+','+number_blue+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['colour_tuple_values'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'RED', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'GREEN', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'BLUE', Blockly.Python.ORDER_ATOMIC);
  var code = '('+value_red+','+value_green+','+value_blue+')';
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


Blockly.Python['rpi_new_buzzer'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.Buzzer('+value_pin+', active_high=True, initial_value=False, pin_factory=None)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_buzzer_beep'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_buzzer = Blockly.Python.valueToCode(block, 'BUZZER', Blockly.Python.ORDER_ATOMIC);
  var value_n = Blockly.Python.valueToCode(block, 'N', Blockly.Python.ORDER_ATOMIC);
  var value_on_time = Blockly.Python.valueToCode(block, 'ON_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_off_time = Blockly.Python.valueToCode(block, 'OFF_TIME', Blockly.Python.ORDER_ATOMIC);
  var value_not_background = Blockly.Python.valueToCode(block, 'NOT_BACKGROUND', Blockly.Python.ORDER_ATOMIC);
  var run_in_background = "True";
  if(value_not_background=="True")
  {
    run_in_background = "False";
  } 
  var code = value_buzzer+'.beep(on_time='+value_on_time+', off_time='+value_off_time+', n='+value_n+', background='+run_in_background+')\n';
  if(value_buzzer="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_buzzer_is_active'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_buzzer = Blockly.Python.valueToCode(block, 'BUZZER', Blockly.Python.ORDER_ATOMIC);
  var code = value_buzzer + '.is_active';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_new_servo'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.AngularServo('+value_pin+', min_angle=0, max_angle=180, min_pulse_width=1/2000, max_pulse_width=11/5000, frame_width=1/50, pin_factory=None)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rpi_servo_turn_to_angle'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var turnAndWaitFunctionName = Blockly.Python.provideFunction_(
        'turn_to_angle_and_wait',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(s,a):',
         '  try:',
         '      if 0<=a and a<=180:',
         '          s.angle = a',
         '          time.sleep(0.4)',
         '          s.angle = None',
         '          return',
         '      else:',
         '          s.angle = None',
         '          return',
         '  except:',
         '      print("Error turning servo")',
         '      return']);
  var code = turnAndWaitFunctionName+'('+value_servo+','+value_angle+')\n';
  if (value_servo=="")
  {
    return "#"+code;
  }
  return code;
};

Blockly.Python['rpi_new_usonic_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_trig = Blockly.Python.valueToCode(block, 'TRIG', Blockly.Python.ORDER_ATOMIC);
  var value_echo = Blockly.Python.valueToCode(block, 'ECHO', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.DistanceSensor('+value_echo+', '+value_trig+', queue_len=5, max_distance=3, threshold_distance=0.3, partial=False, pin_factory=None)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_usonic_get_distance'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_usonic_sensor = Blockly.Python.valueToCode(block, 'USONIC_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = value_usonic_sensor+'.distance';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_new_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.MotionSensor('+value_pin+', queue_len=1, sample_rate=10, threshold=0.5, partial=False, pin_factory=None)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rpi_motion_detected'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_motion_sensor = Blockly.Python.valueToCode(block, 'MOTION_SENSOR', Blockly.Python.ORDER_ATOMIC);
  var code = value_motion_sensor + '.motion_detected';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rpi_variables_get_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_variables_get_rgb_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_rgb_led'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_variables_get_buzzer'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_buzzer'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_variables_get_servo'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_servo'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_variables_get_usonic_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_usonic_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_variables_get_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_motion_sensor'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_new_button'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var value_pull_up = Blockly.Python.valueToCode(block, 'PULL_UP', Blockly.Python.ORDER_ATOMIC);
  var code = 'gpiozero.Button(' + value_pin + ', pull_up=' + value_pull_up + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_get_button'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['rpi_variables_set_button'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),Blockly.VARIABLE_CATEGORY_NAME) + " = " + value_component + "\n";
  return code;
};

Blockly.Python['rpi_button_wait'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_ATOMIC);
  var dropdown_press_release = block.getFieldValue('PRESS_RELEASE');
  var checkbox_timeout = block.getFieldValue('TIMEOUT') == 'TRUE';
  var value_secs = Blockly.Python.valueToCode(block, 'TIMEOUT_SECS', Blockly.Python.ORDER_ATOMIC);
  var code = value_button+'.';
  if (dropdown_press_release=="PRESSED") {
    code = code + 'wait_for_press(';
  } else {
    code = code + 'wait_for_release(';    
  }
  code = code+'timeout=';
  if (checkbox_timeout && value_secs!=""){
    code = code+value_secs;
  } else {
    code = code+'None';
  }
  code = code+')\n';
  return code;
};

Blockly.Python['rpi_button_is_pressed'] = function(block) {
  Blockly.Python.definitions_['import_gpiozero'] = rpi_gpiozero_imports;
  var value_button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_ATOMIC);
  var code = value_button+'.is_pressed';
  return [code, Blockly.Python.ORDER_ATOMIC];
};