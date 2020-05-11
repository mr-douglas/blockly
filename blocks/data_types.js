'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

{
  "type": "float",
  "message0": "change %1 to float (any number)",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "int",
  "message0": "change %1 to integer (whole number)",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "str",
  "message0": "change %1 to string (of text)",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}


    
]);  // END JSON EXTRACT (Do not delete this comment.)