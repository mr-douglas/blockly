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
  "type": "rpi_led_on",
  "message0": "turn LED: %1 on",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_LED"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_off",
  "message0": "turn LED: %1 off",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": "RPi_LED"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rpi_led_toggle",
  "message0": "toggle/invert LED: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "LED",
      "check": ["RPi_LED","RPi_RGB_LED"]
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
  "message0": "is LED %1 lit",
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
}
]);  // END JSON EXTRACT (Do not delete this comment.)