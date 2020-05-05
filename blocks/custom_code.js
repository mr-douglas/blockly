'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "insert_user_code",
    "message0": "insert code: %1",
    "args0": [
      {
        "type": "field_input",
        "name": "user_code",
        "text": "print(\"Hello, world!\")"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#000000",
    "tooltip": "",
    "helpUrl": ""
  }
]);  // END JSON EXTRACT (Do not delete this comment.)