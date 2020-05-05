'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for numeric value.
  {
    "type": "turtle_move",
    "message0": "move turtle %1 %2 pixels",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          [
            "forward",
            "FORWARD"
          ],
          [
            "backward",
            "BACKWARD"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "DISTANCE",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_turn",
    "message0": "turn turtle %1 %2\u00B0",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          [
            "left",
            "LEFT"
          ],
          [
            "right",
            "RIGHT"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "ANGLE",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_turn_left",
    "message0": "turn turtle left %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "ANGLE",
        "value": 0,
        "round": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_turn_right",
    "message0": "turn turtle right %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "ANGLE",
        "value": 0,
        "clockwise": true,
        "round": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_pen_up_down",
    "message0": "pen %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pen_state",
        "options": [
          [
            "up",
            "UP"
          ],
          [
            "down",
            "DOWN"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_pen_colour",
    "message0": "set pen colour to %1",
    "args0": [
      {
        "type": "input_value",
        "name": "pen_colour",
        "check": "Colour"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_fill_colour",
    "message0": "set fill colour to %1",
    "args0": [
      {
        "type": "input_value",
        "name": "fill_colour",
        "check": "Colour"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_begin_fill",
    "message0": "begin fill",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_end_fill",
    "message0": "end fill",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_goto",
    "message0": "move turtle to coordinate ( %1 , %2 )",
    "args0": [
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_set_speed",
    "message0": "set turtle speed to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "SPEED",
        "value": 0,
        "min": 0,
        "max": 10,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_set_pen_size",
    "message0": "set turtle's pen width to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "PEN_SIZE",
        "value": 1,
        "min": 0
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_set_direction_four",
    "message0": "turn turtle to point %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          [
            "right",
            "RIGHT"
          ],
          [
            "up",
            "UP"
          ],
          [
            "left",
            "LEFT"
          ],
          [
            "down",
            "DOWN"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_set_direction_angle",
    "message0": "turn turtle to point in direction %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "DIRECTION",
        "angle": 0,
        "round": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_set_direction",
    "message0": "turn turtle to point in direction %1",
    "args0": [
      {
        "type": "input_value",
        "name": "DIRECTION",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "turtle_get_coord",
    "message0": "turtle's %1 coordinate",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "X_OR_Y",
        "options": [
          [
            "x",
            "X"
          ],
          [
            "y",
            "Y"
          ]
        ]
      }
    ],
    "output": "Number",
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)