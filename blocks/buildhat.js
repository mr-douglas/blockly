'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

goog.provide('Blockly.BHT');

Blockly.Msg.BHT_HUE = '55';


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "bht_variables_get_motor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Motor"    // Returns a value of "BHT_Motor"
},
{
  "type": "bht_variables_set_motor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Motor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_motor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Motor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_motor_pair",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motor_Pair"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motor_Pair"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Motor_Pair"    // Returns a value of "BHT_Motor_Pair"
},
{
  "type": "bht_variables_set_motor_pair",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motor_Pair"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motor_Pair"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Motor_Pair"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_motor_pair",
  "lastDummyAlign0": "RIGHT",
  "message0": "Motor Pair: %1 Left motor port: %2 %3 Right motor port: %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "LEFT_PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "RIGHT_PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": "BHT_Motor_Pair",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_color_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Color_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Color_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Color_Sensor"
},
{
  "type": "bht_variables_set_color_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Color_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Color_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Color_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_color_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Colour Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_color_distance_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Color_Distance_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Color_Distance_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Color_Distance_Sensor"
},
{
  "type": "bht_variables_set_color_distance_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Color_Distance_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Color_Distance_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Color_Distance_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_color_distance_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Colour/Distance Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_distance_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Distance_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Distance_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Distance_Sensor"
},
{
  "type": "bht_variables_set_distance_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Distance_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Distance_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Distance_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_distance_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Distance Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_force_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Force_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Force_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Force_Sensor"
},
{
  "type": "bht_variables_set_force_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Force_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Force_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Force_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_force_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Force Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_light",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Light"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Light"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Light"
},
{
  "type": "bht_variables_set_light",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Light"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Light"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Light"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_light",
  "lastDummyAlign0": "RIGHT",
  "message0": "Light: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_matrix",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Matrix"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Matrix"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Matrix"
},
{
  "type": "bht_variables_set_matrix",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Matrix"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Matrix"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Matrix"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_matrix",
  "lastDummyAlign0": "RIGHT",
  "message0": "Matrix: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_motion_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motion_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motion_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Motion_Sensor"
},
{
  "type": "bht_variables_set_motion_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Motion_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Motion_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Motion_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_motion_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Motion Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_variables_get_tilt_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Tilt_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Tilt_Sensor"
    }
  ],
  "colour": Blockly.Msg.BHT_HUE,
  "inputsInline": true,
  "output": "BHT_Tilt_Sensor"
},
{
  "type": "bht_variables_set_tilt_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["BHT_Tilt_Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "BHT_Tilt_Sensor"
    },
    {
      "type": "input_value",
      "name": "COMPONENT",
      "check": [
        "BHT_Tilt_Sensor"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE
},
{
  "type": "bht_new_tilt_sensor",
  "lastDummyAlign0": "RIGHT",
  "message0": "Tilt Sensor: %1 Port: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "C",
          "C"
        ],
        [
          "D",
          "D"
        ]
      ]
    }
  ],
  "output": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_start",
  "message0": "start motor %1 running at speed %2",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": "BHT_Motor"
    },
    {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_stop",
  "message0": "stop motor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": "BHT_Motor"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_get_aposition",
  "message0": "the current position of motor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": "BHT_Motor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_get_speed",
  "message0": "the current speed of motor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": "BHT_Motor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_pair_start",
  "message0": "start motor pair %1 running, left motor at speed %2 , right motor at speed %3 ",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR_PAIR",
      "check": "BHT_Motor_Pair"
    },
    {
      "type": "input_value",
      "name": "SPEED_L",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "SPEED_R",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motor_pair_stop",
  "message0": "stop motor pair %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR_PAIR",
      "check": "BHT_Motor_Pair"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_sensor_get_colour",
  "message0": "the current colour from colour sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_sensor_get_ambient_light",
  "message0": "the current ambient light from colour sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_sensor_get_reflected_light",
  "message0": "the current reflected light from colour sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_distance_sensor_get_colour",
  "message0": "the current colour from colour/distance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Distance_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_distance_sensor_get_distance",
  "message0": "the current distance from colour/distance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Distance_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_distance_sensor_get_ambient_light",
  "message0": "the current ambient light from colour/distance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Distance_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_color_distance_sensor_get_reflected_light",
  "message0": "the current reflected light from colour/distance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Color_Distance_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_distance_sensor_get_distance",
  "message0": "the current distance from distance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Distance_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_force_sensor_get_force",
  "message0": "the current force from force sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Force_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_motion_sensor_get_distance",
  "message0": "the current distance from motion sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Motion_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bht_tilt_sensor_get_tilt",
  "message0": "the current tilt from tilt sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SENSOR",
      "check": "BHT_Tilt_Sensor"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": Blockly.Msg.BHT_HUE,
  "tooltip": "",
  "helpUrl": ""
}
]);  // END JSON EXTRACT (Do not delete this comment.)

Blockly.Blocks['bht_motor_run_for_seconds'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("BHT_Motor")
        .appendField("run motor");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField(" for ");
    this.appendDummyInput()
        .appendField(" second(s) (")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BLOCKING")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_run_for_rotations'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("BHT_Motor")
        .appendField("run motor");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendValueInput("ROTATIONS")
        .setCheck("Number")
        .appendField(" for ");
    this.appendDummyInput()
        .appendField(" rotations (")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BLOCKING")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_run_for_degrees'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("BHT_Motor")
        .appendField("run motor");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField(" for ");
    this.appendDummyInput()
        .appendField("\u00B0 (")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BLOCKING")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_run_to_position'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("BHT_Motor")
        .appendField("turn motor");
    this.appendValueInput("POSITION")
        .setCheck("Number")
        .appendField(" to position ");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["clockwise","CLOCKWISE"], ["anticlockwise","ANTICLOCKWISE"], ["whichever is shortest","SHORTEST"]]), "DIRECTION")
        .appendField(" (")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BLOCKING")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_run_to_position_angle'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("BHT_Motor")
        .appendField("turn motor");
    this.appendDummyInput()
        .appendField(" to position ")
        .appendField(new Blockly.FieldAngle(0, function(newValue) {if (newValue < -180 || newValue > 180) {return null;}return newValue;}, {precision: 1,round:1,clockwise: true,wrap: 180,offset: 90}), "POSITION");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["clockwise","CLOCKWISE"], ["anticlockwise","ANTICLOCKWISE"], ["whichever is shortest","SHORTEST"]]), "DIRECTION")
        .appendField(" (")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BLOCKING")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_pair_run_for_degrees'] = {
  init: function() {
    this.appendValueInput("MOTOR_PAIR")
        .setCheck("BHT_Motor_Pair")
        .appendField("run motor pair");
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("for");
    this.appendValueInput("SPEED_L")
        .setCheck("Number")
        .appendField("\u00B0 with left motor at speed");
    this.appendValueInput("SPEED_R")
        .setCheck("Number")
        .appendField("and right motor at speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_pair_run_to_position'] = {
  init: function() {
    this.appendValueInput("MOTOR_PAIR")
        .setCheck("BHT_Motor_Pair")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("turn motor pair");
    this.appendValueInput("DEGREES_L")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", left motor to position");
    this.appendValueInput("DEGREES_R")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", right motor to position");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("at speed");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["clockwise","CLOCKWISE"], ["anticlockwise","ANTICLOCKWISE"], ["whichever is shortest","SHORTEST"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_pair_run_to_position_angle'] = {
  init: function() {
    this.appendValueInput("MOTOR_PAIR")
        .setCheck("BHT_Motor_Pair")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("turn motor pair");
    this.appendDummyInput()
        .appendField(", left motor to position")
        .appendField(new Blockly.FieldAngle(0, function(newValue) {if (newValue < -180 || newValue > 180) {return null;}return newValue;}, {precision: 1,round:1,clockwise: true,wrap: 180,offset: 90}), "DEGREES_L");
    this.appendDummyInput()
        .appendField(", right motor to position")
        .appendField(new Blockly.FieldAngle(0, function(newValue) {if (newValue < -180 || newValue > 180) {return null;}return newValue;}, {precision: 1,round:1,clockwise: true,wrap: 180,offset: 90}), "DEGREES_R");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("at speed");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldDropdown([["clockwise","CLOCKWISE"], ["anticlockwise","ANTICLOCKWISE"], ["whichever is shortest","SHORTEST"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_pair_run_for_rotations'] = {
  init: function() {
    this.appendValueInput("MOTOR_PAIR")
        .setCheck("BHT_Motor_Pair")
        .appendField("run motor pair");
    this.appendValueInput("ROTATIONS")
        .setCheck("Number")
        .appendField("for");
    this.appendValueInput("SPEED_L")
        .setCheck("Number")
        .appendField("rotations with left motor at speed");
    this.appendValueInput("SPEED_R")
        .setCheck("Number")
        .appendField("and right motor at speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_motor_pair_run_for_seconds'] = {
  init: function() {
    this.appendValueInput("MOTOR_PAIR")
        .setCheck("BHT_Motor_Pair")
        .appendField("run motor pair");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("for");
    this.appendValueInput("SPEED_L")
        .setCheck("Number")
        .appendField("second(s) with left motor at speed");
    this.appendValueInput("SPEED_R")
        .setCheck("Number")
        .appendField("and right motor at speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bht_colour'] = {
  init: function() {
    var colorField = new Blockly.FieldColour("#ff0000");
    colorField.setColours(
        ['#000000','#ff00ff','#0000ff','#00ffff', '#00cc00','#ffff00', '#ff0000', '#ffffff', '#7f7f7f'],
        ['Black','Violet','Blue','Cyan','Green', 'Yellow', 'Red', 'White', 'None']);
    colorField.setColumns(3);
    this.appendDummyInput()
        .appendField(colorField, "COLOR");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(55);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};