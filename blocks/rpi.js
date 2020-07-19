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
      "text": "RGB LED:"
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
  "output": "RPI_LED",
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
  "output": "RPI_RGB_LED",
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
      "check": "RPI_RGB_LED"
    },
    {
      "type": "input_value",
      "name": "COLOUR",
      "check": "Colour",
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
      "check": "RPI_LED"
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
      "check": "RPI_LED"
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
      "check": "RPI_LED"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)