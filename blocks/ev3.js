'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "ev3_beep",
  "message0": "make brick beep at %1 Hz for  %2 %3 %4 at volume %5 %%",
  "args0": [
    {
      "type": "input_value",
      "name": "FREQUENCY",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DURATION",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "TIME_UNITS",
      "options": [
        [
          "seconds",
          "SECONDS"
        ],
        [
          "milliseconds",
          "MILLISECONDS"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "VOLUME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)