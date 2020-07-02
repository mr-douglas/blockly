'use strict';

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

goog.provide('Blockly.EV3');

Blockly.Msg.EVTHREE_HUE = '90';


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "ev3_beep",
  "message0": "make brick beep at %1 Hz for  %2 %3 %4",
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.EVTHREE_HUE,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ev3_set_volume",
  "message0": "set %1 volume to  %2 %%",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WHICH",
      "options": [
        [
          "all",
          "ALL"
        ],
        [
          "beep",
          "BEEP"
        ],
        [
          "pcm",
          "PCM"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "VOLUME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": Blockly.Msg.EVTHREE_HUE,
  "tooltip": "which – Which volume to set. 'Beep' sets the volume for beep() and play_notes(). 'PCM' sets the volume for play_file() and say(). '_all_' sets both at the same time.",
  "helpUrl": ""
},
// Blocks for EV3Sensor variable getter.
 {
  "type": "ev3_variables_get_sensor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["EV3Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "EV3Sensor"
    }
  ],
  "colour": Blockly.Msg.EVTHREE_HUE,
  "inputsInline": true,
  "output": "EV3Sensor"    // Returns a value of "EV3Sensor"
},
 {
  "type": "ev3_variables_get_and_set_sensor",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["EV3Sensor"],    // Specifies what types to put in the dropdown
      "defaultType": "EV3Sensor"
    },
    {
      "type": "input_value",
      "name": "SENSOR_TYPE",
      "check": [
        "EV3TouchSensor",
        "EV3ColorSensor",
        "EV3UltrasonicSensor",
        "EV3GyroSensor",

      ]
    }
  ],
  "colour": Blockly.Msg.EVTHREE_HUE,
  "inputsInline": true,
  "output": "EV3Sensor"    // Returns a value of "EV3Sensor"
},
// Block for EV3Motor variable getter.
 {
  "type": "ev3_variables_get_motor",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["EV3Motor"],    // Specifies what types to put in the dropdown
      "defaultType": "EV3Motor"
    }
  ],
  "colour": Blockly.Msg.EVTHREE_HUE,
  "output": "EV3Motor"    // Returns a value of "EV3Motor"
},

 // Block for EV3Motor variable setter.
{
  "type": "ev3_variables_set_motor",
  "message0": "%{BKY_VARIABLES_SET}",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["EV3Motor"],
      "defaultType": "EV3Motor"
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "EV3Motor"    // Checks that the input value is of type "EV3Motor"
    }
  ],
  "previousStatement": null,
  "nextStatement": null
},
{
  "type": "ev3_motor_run_until_stalled",
  "message0": "run motor %1 at speed %2 deg/s until stalled, then  %3 ( %4 limit power%5to %6%%)%7",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": "EV3Motor"
    },
    {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "THEN",
      "options": [
        [
          "coast",
          "COAST"
        ],
        [
          "brake",
          "BRAKE"
        ],
        [
          "hold",
          "HOLD"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "LIMIT",
      "checked": false
    },
    {
      "type": "input_dummy",
    },
    {
      "type": "input_value",
      "name": "DUTY_LIMIT",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "BRACKET"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "",
  "mutator": "ev3_run_until_stalled_duty_limit_mutator"
}
]);  // END JSON EXTRACT (Do not delete this comment.)




Blockly.Blocks['ev3_motor_run'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("run motor:");
    this.appendDummyInput()
        .appendField("at speed");
    this.appendValueInput("SPEED")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees/second");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_touch_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Touch Sensor");
    this.setOutput(true, "EV3TouchSensor");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_colour_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Colour Sensor");
    this.setOutput(true, "EV3ColorSensor");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_ultrasonic_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic Sensor");
    this.setOutput(true, "EV3UltrasonicSensor");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_gyro_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gyroscopic Sensor (positive is")
        .appendField(new Blockly.FieldDropdown([["clockwise","CLOCKWISE"], ["counterclockwise","COUNTERCLOCKWISE"]]), "DIRECTION")
        .appendField(")");
    this.setOutput(true, "EV3GyroSensor");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_set_up'] = {
  init: function() {
    this.appendDummyInput().appendField("Set up EV3 Brick:");
    this.appendDummyInput().appendField("        Motors:");
    this.appendValueInput("MOTOR_A").setCheck("EV3Motor").appendField("                Connect Port A to motor:");
    this.appendValueInput("MOTOR_B").setCheck("EV3Motor").appendField("                Connect Port B to motor:");
    this.appendValueInput("MOTOR_C").setCheck("EV3Motor").appendField("                Connect Port C to motor:");
    this.appendValueInput("MOTOR_D").setCheck("EV3Motor").appendField("                Connect Port D to motor:");
    this.appendDummyInput().appendField("    Sensors:");
    this.appendValueInput("SENSOR_ONE").setCheck("EV3Sensor").appendField("                Connect Sensor Port 1 to sensor:");
    this.appendValueInput("SENSOR_TWO").setCheck("EV3Sensor").appendField("                Connect Sensor Port 2 to sensor:");
    this.appendValueInput("SENSOR_THREE").setCheck("EV3Sensor").appendField("                Connect Sensor Port 3 to sensor:");
    this.appendValueInput("SENSOR_FOUR").setCheck("EV3Sensor").appendField("                Connect Sensor Port 4 to sensor:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_run_time'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("run motor");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("at speed");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("deg/s for ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["seconds","SECONDS"], ["microseconds","MICROSECONDS"]]), "TIME_UNITS")
        .appendField(" then ")
        .appendField(new Blockly.FieldDropdown([["coast","COAST"], ["brake","BRAKE"], ["hold","HOLD"]]), "THEN")
        .appendField("(")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "WAIT")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_run_angle'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("rotate motor");
    this.appendValueInput("ANGLE")
        .setCheck("Number");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("\u00B0 at speed");
    this.appendDummyInput()
        .appendField("deg/s then ")
        .appendField(new Blockly.FieldDropdown([["coast","COAST"], ["brake","BRAKE"], ["hold","HOLD"]]), "THEN")
        .appendField("(")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "WAIT")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_run_target'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("rotate motor");
    this.appendValueInput("TARGET_ANGLE")
        .setCheck("Number")
        .appendField("to angle");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("\u00B0 at speed");
    this.appendDummyInput()
        .appendField("deg/s then ")
        .appendField("(")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "WAIT")
        .appendField("finish before running next instruction)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.EV3.RUN_UNTIL_STALLED_DUTY_LIMIT_MUTATOR_MIXIN = {
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var dutyLimitIsNone = this.getFieldValue('LIMIT')=='FALSE';
    container.setAttribute('duty_limit_is_none',dutyLimitIsNone);
    return container;
  },
  domToMutation: function(xmlElement) {
    var dutyLimitIsNone = xmlElement.getAttribute('duty_limit_is_none')=='true';
    this.updateShape_(dutyLimitIsNone);
  },
  updateShape_: function(dutyLimitIsNone) {
    var dutyLimitNumberInput = this.getInput('DUTY_LIMIT');
    if(dutyLimitIsNone) {
      if (dutyLimitNumberInput) {
        this.removeInput('DUTY_LIMIT');
        this.removeInput('BRACKET');
        this.appendDummyInput("BRACKET")
          .appendField(")");
      }
    } else if(!dutyLimitNumberInput) {
      this.removeInput('BRACKET');
      this.appendValueInput("DUTY_LIMIT")
        .setCheck("Number")
        .appendField("to");
      this.appendDummyInput("BRACKET")
        .appendField("%)");
    }
  }
};

Blockly.EV3.RUN_UNTIL_STALLED_DUTY_LIMIT_MUTATOR_EXTENSION = function() {
  this.getField('LIMIT').setValidator(function(option) {
    var dutyLimitIsNone = (option == 'FALSE');
    this.getSourceBlock().updateShape_(dutyLimitIsNone);
  });
};

Blockly.Extensions.registerMutator('ev3_run_until_stalled_duty_limit_mutator',
  Blockly.EV3.RUN_UNTIL_STALLED_DUTY_LIMIT_MUTATOR_MIXIN,
  Blockly.EV3.RUN_UNTIL_STALLED_DUTY_LIMIT_MUTATOR_EXTENSION);

Blockly.Blocks['ev3_touch_sensor_pressed'] = {
  init: function() {
    this.appendValueInput("SENSOR")
        .setCheck("EV3Sensor")
        .appendField("touch sensor");
    this.appendDummyInput()
        .appendField("is pressed");
    this.setOutput(true, "Boolean");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_speed'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("get speed of motor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_angle'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("get current angle of motor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_reset_angle'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField("set the angle being measured on motor");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("to");
    this.appendDummyInput()
        .appendField("\u00B0");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_motor_stop_brake_hold'] = {
  init: function() {
    this.appendValueInput("MOTOR")
        .setCheck("EV3Motor")
        .appendField(new Blockly.FieldDropdown([["stop and coast","STOP"], ["brake","BRAKE"], ["hold","HOLD"]]), "STOP_BRAKE_OR_HOLD")
        .appendField("the motor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_ultrasonic_sensor_distance'] = {
  init: function() {
    this.appendValueInput("ULTRASONIC_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("distance measured by ultrasonic sensor");
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "SILENT")
        .appendField("turn off after measuring)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_gyro_sensor_speed'] = {
  init: function() {
    this.appendValueInput("GYRO_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("angular velocity of gyroscopic sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_gyro_angle_speed'] = {
  init: function() {
    this.appendValueInput("GYRO_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("current angle of gyroscopic sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_gyro_sensor_reset_angle'] = {
  init: function() {
    this.appendValueInput("GYRO_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("reset angle of gyroscopic sensor");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("to");
    this.appendDummyInput()
        .appendField("\u00B0");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_color_sensor_color'] = {
  init: function() {
    this.appendValueInput("COLOR_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("colour detected by");
    this.setInputsInline(true);
    this.setOutput(true, "EV3Color");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_color_sensor_ambient'] = {
  init: function() {
    this.appendValueInput("COLOR_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("ambient light detected by");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_color_sensor_reflection'] = {
  init: function() {
    this.appendValueInput("COLOR_SENSOR")
        .setCheck("EV3Sensor")
        .appendField("reflected light detected by");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_color'] = {
  init: function() {
    var colorField = new Blockly.FieldColour("#ff0000");
    colorField.setColours(
        ['#000000', '#0000ff', '#00cc00','#ffff00', '#ff0000', '#ffffff', '#d2691e', '#7f7f7f'],
        ['Black', 'Blue', 'Green', 'Yellow', 'Red', 'White', 'Brown', 'None']);
    colorField.setColumns(2);
    this.appendDummyInput()
        .appendField(colorField, "COLOR");
    this.setInputsInline(true);
    this.setOutput(true, "EV3Color");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_rgb'] = {
  init: function() {
    this.appendValueInput("COLOR_SENSOR")
      .setCheck("EV3Sensor")
      .appendField("amount of")
      .appendField(new Blockly.FieldDropdown([["red","RED"], ["green","GREEN"], ["blue","BLUE"]]), "RGB")
      .appendField("measured by");
    this.setInputsInline(true);
    this.setOutput(true, "EV3Color");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_brick_light_on'] = {
  init: function() {
    this.appendValueInput("COLOR")
      .setCheck("EV3Color")
      .appendField("set EV3 brick light colour to");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['ev3_brick_light_off'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turn EV3 brick light off");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['ev3_brick_buttons_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("list of EV3 brick buttons pressed ");
    this.setOutput(true, "Array");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_screen_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear EV3 brick screen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_wait'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("wait");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["seconds","SECONDS"], ["milliseconds","MILLISECONDS"]]), "TIME_UNITS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_screen_font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set EV3 brick screen to use")
        .appendField(new Blockly.FieldDropdown([["small","SMALL"], ["medium","MEDIUM"], ["large","LARGE"]]), "FONT_SIZE")
        .appendField("font");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ev3_screen_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("write text to EV3 screen:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};