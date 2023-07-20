'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

goog.provide('Blockly.RPI');

Blockly.Msg.RPI_HUE = '270';


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "rpi_new_led",
  "message0": "%1 %2 pin: %3",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "LED:"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_LED",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_new_rgb_led",
  "message0": "%1 %2 red pin: %3 green pin: %4 blue pin: %5",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "RGB LED:"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "RED_PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "GREEN_PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "BLUE_PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_RGB_LED",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_set_rgb_led_colour",
  "message0": "set RGB LED: %1 %2 to colour %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_RGB_LED"
    },
    {
      "type": "input_value",
      "name": "COLOUR",
      "check": "RPi_Colour_Tuple",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_on_off",
  "message0": "turn %1 component: %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ON_OFF",
      "options": [
        [
          "on",
          "ON"
        ],
        [
          "off",
          "OFF"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": ["RPi_LED","RPi_RGB_LED","RPi_Buzzer","RPi_Digital_Output","RPi_PWM_Output"]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_toggle",
  "message0": "toggle/invert component: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": ["RPi_LED","RPi_RGB_LED","RPi_Buzzer","RPi_Digital_Output","RPi_PWM_Output"]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_is_lit",
  "message0": "is LED %1 lit?",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_LED"
    }
  ],
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_set_value",
  "message0": "set the value of LED %1 to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": [
        "RPi_LED",
        "RPi_RGB_LED"
      ]
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": ["Number", "RPi_Colour_Tuple"]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_get_value",
  "message0": "get the value of LED %1",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": [
        "RPi_LED",
        "RPi_RGB_LED"
      ]
    }
  ],
  "output": "Number",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_blink",
  "message0": "make a simple LED blink: %1 LED: %2 number of times to blink: %3 each time stay on for (in seconds): %4 each time stay off for (in seconds): %5 time to turn on (in seconds): %6 time to turn off (in seconds): %7 wait until finished: %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_LED",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "N",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ON_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "OFF_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FADE_IN_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FADE_OUT_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NOT_BACKGROUND",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_rgb_led_blink",
  "message0": "make an RGB LED blink: %1 LED: %2 number of times to blink: %3 each time stay on for (in seconds): %4 each time stay off for (in seconds): %5 time to turn on (in seconds): %6 time to turn off (in seconds): %7 on color: %8 off color: %9 wait until finished: %10",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_RGB_LED",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "N",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ON_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "OFF_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FADE_IN_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FADE_OUT_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ON_COLOR",
      "check": "RPi_Colour_Tuple",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "OFF_COLOR",
      "check": "RPi_Colour_Tuple",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NOT_BACKGROUND",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "colour_tuple",
  "message0": "colour: red: %1 ; green: %2 ; blue: %3",
  "args0": [
    {
      "type": "field_number",
      "name": "RED",
      "value": 0,
      "min": 0,
      "max": 1
    },
    {
      "type": "field_number",
      "name": "GREEN",
      "value": 0,
      "min": 0,
      "max": 1
    },
    {
      "type": "field_number",
      "name": "BLUE",
      "value": 0,
      "min": 0,
      "max": 1
    }
  ],
  "output": "RPi_Colour_Tuple",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "hex_colour_to_tuple",
  "message0": "colour %1",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOUR",
      "check": "Colour"
    }
  ],
  "output": "RPi_Colour_Tuple",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "colour_tuple_values",
  "message0": "colour: red: %1 ; green: %2 ; blue: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "RED",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "GREEN",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "BLUE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "RPi_Colour_Tuple",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_new_buzzer",
  "message0": "buzzer: %1 pin: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "output": "RPi_Buzzer",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_buzzer_beep",
  "message0": "make buzzer beep: %1 buzzer: %2 number of times to beep: %3 each time beep for (in seconds): %4 times between beeps (in seconds): %5 wait until finished: %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "BUZZER",
      "check": "RPi_Buzzer",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "N",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ON_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "OFF_TIME",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "NOT_BACKGROUND",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_buzzer_is_active",
  "message0": "is buzzer %1 active?",
  "args0": [
    {
      "type": "input_value",
      "name": "BUZZER",
      "check": "RPi_Buzzer",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_new_servo",
  "message0": "servo: %1 pin: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_Servo",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_servo_turn_to_angle",
  "message0": "turn servo: %1 to angle: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "SERVO",
      "check": "RPi_Servo",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ANGLE",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_new_usonic_sensor",
  "message0": "ultrasonic distance sensor: %1 trigger pin: %2 echo pin: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TRIG",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ECHO",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_USonic_Sensor",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_usonic_get_distance",
  "message0": "get distance from ultrasonic sensor: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "USONIC_SENSOR",
      "check": "RPi_USonic_Sensor"
    }
  ],
  "output": "Number",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_new_motion_sensor",
  "message0": "motion sensor: %1 pin: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_Motion_Sensor",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_motion_detected",
  "message0": "has motion sensor: %1 detected motion?",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTION_SENSOR",
      "check": "RPi_Motion_Sensor",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_LED variable getter.
{
  "type": "rpi_variables_get_led",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_LED"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_LED"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_LED"    // Returns a value of "RPi_LED"
},
{
  "type": "rpi_variables_set_led",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_LED"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_LED"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_LED"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_RGB_LED variable getter.
{
  "type": "rpi_variables_get_rgb_led",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_RGB_LED"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_RGB_LED"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_RGB_LED"    // Returns a value of "RPi_RGB_LED"
},
{
  "type": "rpi_variables_set_rgb_led",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_RGB_LED"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_RGB_LED"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_RGB_LED"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_Buzzer variable getter.
{
  "type": "rpi_variables_get_buzzer",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Buzzer"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Buzzer"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Buzzer"    // Returns a value of "RPi_Buzzer"
},
{
  "type": "rpi_variables_set_buzzer",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Buzzer"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Buzzer"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Buzzer"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_Servo variable getter.
{
  "type": "rpi_variables_get_servo",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Servo"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Servo"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Servo"    // Returns a value of "RPi_Servo"
},
{
  "type": "rpi_variables_set_servo",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Servo"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Servo"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Servo"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_USonic_Sensor variable getter.
{
  "type": "rpi_variables_get_usonic_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_USonic_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_USonic_Sensor"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_USonic_Sensor"    // Returns a value of "RPi_USonic_Sensor"
},
{
  "type": "rpi_variables_set_usonic_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_USonic_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_USonic_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_USonic_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_Motion_Sensor variable getter.
{
  "type": "rpi_variables_get_motion_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Motion_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Motion_Sensor"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Motion_Sensor"    // Returns a value of "RPi_Motion_Sensor"
},
 {
  "type": "rpi_variables_set_motion_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Motion_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Motion_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Motion_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
// Blocks for RPi_Button variable getter.
{
  "type": "rpi_variables_get_button",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Button"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Button"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Button"    // Returns a value of "RPi_Button"
},
 {
  "type": "rpi_variables_set_button",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Button"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Button"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Button"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_button",
  "message0": "Button: %1 pin: %2 pull up: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "PULL_UP",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "output": "RPi_Button",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_button_wait",
  "message0": "wait until button  %1 is %2 ( %3 %4 or  %5 seconds have passed) %6  %7",
  "args0": [
    {
      "type": "input_value",
      "name": "BUTTON",
      "check": "RPi_Button"
    },
    {
      "type": "field_dropdown",
      "name": "PRESS_RELEASE",
      "options": [
        [
          "pressed",
          "PRESSED"
        ],
        [
          "released",
          "RELEASED"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "TIMEOUT",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TIMEOUT_SECS",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "HAVE_PASSED"
    },
    {
      "type": "input_dummy",
      "name": "END"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": "",
  "mutator": 'rpi_button_timeout_mutator'
},
{
  "type": "rpi_button_is_pressed",
  "message0": "button %1 is pressed",
  "args0": [
    {
      "type": "input_value",
      "name": "BUTTON",
      "check": "RPi_Button"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_Light_Sensor variable getter.
{
  "type": "rpi_variables_get_light_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Light_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Light_Sensor"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Light_Sensor"    // Returns a value of "RPi_Light_Sensor"
},
 {
  "type": "rpi_variables_set_light_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Light_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Light_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Light_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_light_sensor",
  "message0": "Light Sensor: %1 pin: %2 threshold: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "THRESHOLD",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "What amount of light, from 0 to 1, is considered to mean there is light",
  "helpUrl": ""
},
{
  "type": "rpi_light_detected",
  "message0": "light sensor %1 has detected light",
  "args0": [
    {
      "type": "input_value",
      "name": "LIGHT_SENSOR",
      "check": "RPi_Light_Sensor",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_light_wait_until_light_dark",
  "message0": "wait until light sensor %1 %2 light",
  "args0": [
    {
      "type": "input_value",
      "name": "LIGHT_SENSOR",
      "check": "RPi_Light_Sensor",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "LIGHT_OR_DARK",
      "options": [
        [
          "detects",
          "LIGHT"
        ],
        [
          "doesn't detect",
          "DARK"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_light_sensor_get_value",
  "message0": "get the value of light sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "LIGHT_SENSOR",
      "check": "RPi_Light_Sensor"
    }
  ],
  "output": "Number",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_Digital_Input variable getter.
{
  "type": "rpi_variables_get_digital_input",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Digital_Input"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Digital_Input"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Digital_Input"    // Returns a value of "RPi_Digital_Input"
},
 {
  "type": "rpi_variables_set_digital_input",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Digital_Input"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Digital_Input"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Digital_Input"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_digital_input",
  "message0": "Digital Input: %1 pin: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_digital_input_is_active",
  "message0": "sensor %1 is active",
  "args0": [
    {
      "type": "input_value",
      "name": "DIGITAL_INPUT",
      "check": "RPi_Digital_Input",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_digital_input_wait_until_active_inactive",
  "message0": "wait until sensor %1 is %2",
  "args0": [
    {
      "type": "input_value",
      "name": "DIGITAL_INPUT",
      "check": "RPi_Digital_Input",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "ACTIVE_OR_INACTIVE",
      "options": [
        [
          "active",
          "ACTIVE"
        ],
        [
          "inactive",
          "INACTIVE"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_Digital_Output variable getter.
{
  "type": "rpi_variables_get_digital_output",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Digital_Output"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Digital_Output"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Digital_Output"    // Returns a value of "RPi_Digital_Output"
},
 {
  "type": "rpi_variables_set_digital_output",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Digital_Output"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Digital_Output"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Digital_Output"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_digital_output",
  "message0": "Digital Output: %1 pin: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_PWM_Output variable getter.
{
  "type": "rpi_variables_get_pwm_output",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_PWM_Output"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_PWM_Output"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_PWM_Output"    // Returns a value of "RPi_PWM_Output"
},
 {
  "type": "rpi_variables_set_pwm_output",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_PWM_Output"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_PWM_Output"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_PWM_Output"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_pwm_output",
  "message0": "PWM (Pulse-Width Modulation) Output: %1 pin: %2 frequency: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FREQUENCY",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_pwm_output_set_frequency",
  "message0": "set the frequency of  %1 to %2 Hz",
  "args0": [
    {
      "type": "input_value",
      "name": "PWM_OUTPUT",
      "check": "RPi_PWM_Output",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "FREQUENCY",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_pwm_output_set_duty",
  "message0": "set the duty of  %1 to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "PWM_OUTPUT",
      "check": "RPi_PWM_Output",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "DUTY",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
// Blocks for RPi_Rotary_Encoder variable getter.
{
  "type": "rpi_variables_get_rotary_encoder",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Rotary_Encoder"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Rotary_Encoder"
    }
  ],
  "colour": Blockly.Msg.RPI_HUE,
  "inputsInline": true,
  "output": "RPi_Rotary_Encoder"    // Returns a value of "RPi_PWM_Output"
},
 {
  "type": "rpi_variables_set_rotary_encoder",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["RPi_Rotary_Encoder"],    // Specifies what types to put in the dropdown
      "defaultType": "RPi_Rotary_Encoder"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "RPi_Rotary_Encoder"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE
},
{
  "type": "rpi_new_rotary_encoder",
  "message0": "Rotary Encoder: %1 CLK pin: %2 DT pin: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "CLK_PIN",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "DT_PIN",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_rotary_encoder_wait",
  "message0": "wait until rotary encoder  %1 %2 ( %3 %4 or  %5 seconds have passed) %6  %7",
  "args0": [
    {
      "type": "input_value",
      "name": "ROTARY_ENCODER",
      "check": "RPi_Rotary_Encoder"
    },
    {
      "type": "field_dropdown",
      "name": "ROTATE_CLOCKWISE_COUNTERCLOCKWISE",
      "options": [
        [
          "rotates",
          "ROTATES"
        ],
        [
          "rotates clockwise",
          "ROTATES_CLOCKWISE"
        ],
        [
          "rotates counter-clockwise",
          "ROTATES_COUNTERCLOCKWISE"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "TIMEOUT",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TIMEOUT_SECS",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "HAVE_PASSED"
    },
    {
      "type": "input_dummy",
      "name": "END"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": "",
  "mutator": 'rpi_rotary_encoder_timeout_mutator'
},
{
  "type": "rpi_rotary_encoder_steps",
  "message0": "steps rotary encoder %1 has turned",
  "args0": [
    {
      "type": "input_value",
      "name": "ROTARY_ENCODER",
      "check": "RPi_Rotary_Encoder"
    }
  ],
  "output": "Number",
  "colour": Blockly.Msg.RPI_HUE,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)


Blockly.RPI.WAIT_BUTTON_TIMEOUT_MUTATOR_MIXIN = {
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var timeoutSecsIsNone = this.getFieldValue('TIMEOUT')=='FALSE';
    container.setAttribute('timeout_secs_is_none',timeoutSecsIsNone);
    return container;
  },
  domToMutation: function(xmlElement) {
    var timeoutSecsIsNone = xmlElement.getAttribute('timeout_secs_is_none')=='true';
    this.updateShape_(timeoutSecsIsNone);
  },
  updateShape_: function(timeoutSecsIsNone) {
    var timeoutSecsNumberInput = this.getInput('TIMEOUT_SECS');
    if(timeoutSecsIsNone) {
      if (timeoutSecsNumberInput) {
        this.removeInput("TIMEOUT_SECS",true);
        this.removeInput("HAVE_PASSED",true);
        this.removeInput("END",true);
        this.appendDummyInput("END")
          .appendField(")");
      }
    } else if(!timeoutSecsNumberInput) {
      this.removeInput("END",true);
      this.appendValueInput("TIMEOUT_SECS")
        .setCheck("Number")
        .appendField("or ");
      this.appendDummyInput("HAVE_PASSED")
        .appendField("seconds have passed)");
      this.appendDummyInput("END")
        .appendField("");
    }
  }
};

Blockly.RPI.WAIT_BUTTON_TIMEOUT_MUTATOR_EXTENSION = function() {
  this.getField('TIMEOUT').setValidator(function(option) {
    var timeoutSecsIsNone = (option == 'FALSE');
    this.getSourceBlock().updateShape_(timeoutSecsIsNone);
  });
};

Blockly.Extensions.registerMutator('rpi_button_timeout_mutator',
  Blockly.RPI.WAIT_BUTTON_TIMEOUT_MUTATOR_MIXIN,
  Blockly.RPI.WAIT_BUTTON_TIMEOUT_MUTATOR_EXTENSION);


Blockly.RPI.WAIT_ROTARY_ENCODER_TIMEOUT_MUTATOR_MIXIN = {
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var timeoutSecsIsNone = this.getFieldValue('TIMEOUT')=='FALSE';
    container.setAttribute('timeout_secs_is_none',timeoutSecsIsNone);
    return container;
  },
  domToMutation: function(xmlElement) {
    var timeoutSecsIsNone = xmlElement.getAttribute('timeout_secs_is_none')=='true';
    this.updateShape_(timeoutSecsIsNone);
  },
  updateShape_: function(timeoutSecsIsNone) {
    var timeoutSecsNumberInput = this.getInput('TIMEOUT_SECS');
    if(timeoutSecsIsNone) {
      if (timeoutSecsNumberInput) {
        this.removeInput("TIMEOUT_SECS",true);
        this.removeInput("HAVE_PASSED",true);
        this.removeInput("END",true);
        this.appendDummyInput("END")
          .appendField(")");
      }
    } else if(!timeoutSecsNumberInput) {
      this.removeInput("END",true);
      this.appendValueInput("TIMEOUT_SECS")
        .setCheck("Number")
        .appendField("or ");
      this.appendDummyInput("HAVE_PASSED")
        .appendField("seconds have passed)");
      this.appendDummyInput("END")
        .appendField("");
    }
  }
};

Blockly.RPI.WAIT_ROTARY_ENCODER_TIMEOUT_MUTATOR_EXTENSION = function() {
  this.getField('TIMEOUT').setValidator(function(option) {
    var timeoutSecsIsNone = (option == 'FALSE');
    this.getSourceBlock().updateShape_(timeoutSecsIsNone);
  });
};

Blockly.Extensions.registerMutator('rpi_rotary_encoder_timeout_mutator',
  Blockly.RPI.WAIT_ROTARY_ENCODER_TIMEOUT_MUTATOR_MIXIN,
  Blockly.RPI.WAIT_ROTARY_ENCODER_TIMEOUT_MUTATOR_EXTENSION);