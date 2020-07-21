'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
      "check": ["RPi_LED","RPi__RGB_LED","RPi_Buzzer"]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
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
      "check": ["RPi_LED","RPi__RGB_LED","RPi_Buzzer"]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
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
  "colour": 270,
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
        "LED",
        "RGB_LED"
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
      "check": "Number",
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
  "colour": 270,
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
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
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
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)