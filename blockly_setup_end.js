document.getElementById('inputfile').addEventListener('change', function() {
                                                                            var fr=new FileReader();
                                                                            fr.onload=function(){
                                                                                                 Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(fr.result), workspace);
                                                                                                }
                                                                            fr.readAsText(this.files[0]);
                                                                           }
                                                     );

var toolboxString = '';
toolboxString += '<xml id="toolbox" style="display: none;">';
toolboxString += '<category name="Maths" colour="%{BKY_MATH_HUE}" web-class="myLabelStyle">'; 
toolboxString += '<category name="Basics" colour="%{BKY_MATH_HUE}">';   
toolboxString += '<block type="math_number"><field name="NUM">0</field></block>';
toolboxString += '<block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';
toolboxString += '<block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';
toolboxString += '<block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
toolboxString += '<block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
toolboxString += '<block type="math_arithmetic"><field name="OP">POWER</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
toolboxString += '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';
toolboxString += '<block type="math_constant"></block>';
toolboxString += '</category>';
toolboxString += '<category name="Random" colour="%{BKY_MATH_HUE}">';
toolboxString += '<block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>';
toolboxString += '<block type="math_random_float"></block>';
toolboxString += '</category>';
toolboxString += '<category name="Trigonometry" colour="%{BKY_MATH_HUE}">';
toolboxString += '<block type="math_trig"><field name="OP">SIN</field> <value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block>';
toolboxString += '<block type="math_trig"><field name="OP">COS</field> <value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block>';
toolboxString += '<block type="math_trig"> <field name="OP">TAN</field> <value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block>';
toolboxString += '<block type="math_inv_trig"><field name="OP">ASIN</field> <value name="NUM"><shadow type="math_constant"><field name="CONSTANT">SQRT1_2</field></shadow></value></block>';
toolboxString += '<block type="math_inv_trig"><field name="OP">ACOS</field> <value name="NUM"><shadow type="math_constant"><field name="CONSTANT">SQRT1_2</field></shadow></value></block>';
toolboxString += '<block type="math_inv_trig"> <field name="OP">ATAN</field> <value name="NUM"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
toolboxString += '</category>';
toolboxString += '<category name="Other" colour="%{BKY_MATH_HUE}">';
toolboxString += '<block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';      
toolboxString += '<block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block>';   
toolboxString += '<block type="math_on_list"></block>';  
toolboxString += '<block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
toolboxString += '<block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>';
toolboxString += '</category>';
toolboxString += '</category>';
toolboxString += '<category colour="%{BKY_TEXTS_HUE}" name="Input/Output">';
toolboxString += '<block type="text_print"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '<block type="text_prompt_ext"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '<block type="time_sleep"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
toolboxString += '</category>';
toolboxString += '<category colour="%{BKY_TEXTS_HUE}" name="Strings (Text)">';
toolboxString += '<block type="text"></block>';
toolboxString += '<block type="text_join"></block>';
toolboxString += '<block type="text_append"><value name="TEXT"><shadow type="text"></shadow></value></block>';
toolboxString += '<block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '<block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block>';
toolboxString += '<block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">text</field></block></value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '<block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">text</field></block></value></block>';
toolboxString += '<block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">text</field></block></value></block>';
toolboxString += '<block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '<block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block>';
toolboxString += '</category>';
toolboxString += '<sep></sep>';
toolboxString += '<category name="Selection (If/Else) and Logic" colour="%{BKY_LOGIC_HUE}">'; 
toolboxString += '<block type="controls_if"></block>'; 
toolboxString += '<block type="logic_compare"></block>'; 
toolboxString += '<block type="logic_operation"></block>'; 
toolboxString += '<block type="logic_negate"></block>'; 
toolboxString += '<block type="logic_boolean"></block>'; 
toolboxString += '<block type="logic_null"></block>';
toolboxString += '</category>';
toolboxString += '<category name="Iteration (Loops)" colour="%{BKY_LOOPS_HUE}">'; 
toolboxString += '<block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'; 
toolboxString += '<block type="controls_whileUntil"><value name="BOOL"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block>'; 
toolboxString += '<block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'; 
toolboxString += '<block type="controls_forEach"></block>'; 
toolboxString += '<block type="controls_flow_statements"></block>';
toolboxString += '</category>';
toolboxString += '<category  name="Data Types" colour="%{BKY_VARIABLES_HUE}">'; 
toolboxString += '<block type="float"></block>'; 
toolboxString += '<block type="int"></block>'; 
toolboxString += '<block type="str"></block>';
toolboxString += '</category>';
toolboxString += '<sep></sep>';
toolboxString += '<category colour="%{BKY_LISTS_HUE}" name="Lists">'; 
toolboxString += '<block type="lists_create_with"><mutation items="0"></mutation></block>'; 
toolboxString += '<block type="lists_create_with"></block>'; 
toolboxString += '<block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>'; 
toolboxString += '<block type="lists_length"></block>'; 
toolboxString += '<block type="lists_isEmpty"></block>'; 
toolboxString += '<block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block>'; 
toolboxString += '<block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block>'; 
toolboxString += '<block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block>'; 
toolboxString += '<block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block>'; 
toolboxString += '<block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block>'; 
toolboxString += '<block type="lists_sort"></block>';
toolboxString += '</category>';
toolboxString += '<category colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE" name="Variables"></category>';
toolboxString += '<category colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE" name="Functions"></category>';
toolboxString += '<sep></sep>';
toolboxString += '<category name="Turtle" colour="%{BKY_COLOUR_HUE}">'; 
toolboxString += '<block type="turtle_move"><value name="DISTANCE"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'; 
toolboxString += '<block type="turtle_turn"><value name="ANGLE"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block>'; 
toolboxString += '<block type="turtle_turn_left"></block>'; 
toolboxString += '<block type="turtle_turn_right"></block>'; 
toolboxString += '<block type="turtle_goto"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'; 
toolboxString += '<block type="turtle_set_speed"></block>'; 
toolboxString += '<block type="turtle_pen_up_down"></block>'; 
toolboxString += '<block type="turtle_pen_colour"></block>'; 
toolboxString += '<block type="turtle_fill_colour"></block>'; 
toolboxString += '<block type="turtle_pen_fill_colour"></block>'; 
toolboxString += '<block type="turtle_begin_fill"></block>'; 
toolboxString += '<block type="turtle_end_fill"></block>'; 
toolboxString += '<block type="turtle_begin_end_fill"></block>'; 
toolboxString += '<block type="turtle_set_pen_size"></block>'; 
toolboxString += '<block type="turtle_set_direction_four"></block>'; 
toolboxString += '<block type="turtle_set_direction_angle"></block>'; 
toolboxString += '<block type="turtle_set_direction"></block>'; 
toolboxString += '<block type="turtle_get_coord"></block>'; 
toolboxString += '<block type="turtle_show"></block>'; 
toolboxString += '<block type="turtle_hide"></block>'; 
toolboxString += '<block type="colour_picker"></block>'; 
toolboxString += '<block type="colour_random"></block>'; 
toolboxString += '<block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'; 
toolboxString += '<block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>';
toolboxString += '</category>';
toolboxString += '<category colour="90" name="EV3">'; 
toolboxString += '<category colour="90" name="Brick">';   
toolboxString += '<block type="ev3_set_up"></block>';   
toolboxString += '<block type="ev3_beep"><value name="FREQUENCY"><shadow type="math_number"><field name="NUM">500</field></shadow></value><value name="DURATION"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';   
toolboxString += '<block type="ev3_set_volume"><value name="VOLUME"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>';   
toolboxString += '<block type="ev3_color"></block>';   
toolboxString += '<block type="ev3_brick_light_on"><value name="COLOR"><shadow type="ev3_color"><field name="COLOR">#00cc00</field></shadow></value></block>';   
toolboxString += '<block type="ev3_brick_light_off"></block>';   
toolboxString += '<block type="ev3_brick_buttons_pressed"></block>';   
toolboxString += '<block type="ev3_wait"><value name="TIME"><shadow type="math_number"><field name="NUM">60</field></shadow></value></block>';   
toolboxString += '<block type="ev3_screen_font"></block>';   
toolboxString += '<block type="ev3_screen_print"></block>'; 
toolboxString += '</category>'; 
toolboxString += '<category colour="90" name="Motors" custom="EV3_MOTORS"></category>'; 
toolboxString += '<category colour="90" name="Sensors" custom="EV3_SENSORS"></category>'; 
toolboxString += '<block type="ev3_set_up"></block>'; 
toolboxString += '<block type="ev3_color"></block>';
toolboxString += '</category>';
toolboxString += '<category colour="270" name="Raspberry Pi">'; 
toolboxString += '<block type="time_sleep"><value name="SECS"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'; 
toolboxString += '<block type="time_get_current_time"></block>'; 
toolboxString += '<category colour="270" name="LED" custom="RPi_LED"></category>'; 
toolboxString += '<category colour="270" name="RGB LED" custom="RPi_RGB_LED"></category>'; 
toolboxString += '<category colour="270" name="Button" custom="RPi_Button"></category>'; 
toolboxString += '<category colour="270" name="Light Sensor" custom="RPi_Light_Sensor"></category>'; 
toolboxString += '<category colour="270" name="Buzzer" custom="RPi_Buzzer"></category>'; 
toolboxString += '<category colour="270" name="Servo" custom="RPi_Servo"></category>'; 
toolboxString += '<category colour="270" name="Rotary Encoder" custom="RPi_Rotary_Encoder"></category>';
toolboxString += '<category colour="270" name="Ultrasonic Distance Sensor" custom="RPi_USonic_Sensor"></category>'; 
toolboxString += '<category colour="270" name="Motion Sensor" custom="RPi_Motion_Sensor"></category>'; 
toolboxString += '<category colour="270" name="Digital Input" custom="RPi_Digital_Input"></category>'; 
toolboxString += '<category colour="270" name="Digital Output" custom="RPi_Digital_Output"></category>'; 
toolboxString += '<category colour="270" name="PWM Output" custom="RPi_PWM_Output"></category>';
toolboxString += '</category>';
toolboxString += '<sep></sep>';
toolboxString += '<category colour="black" name="Insert Your Own Code">'; 
toolboxString += '<block type="insert_user_code"></block>';
toolboxString += '</category>';
toolboxString += '</xml>';


workspace = Blockly.inject('blocklyDiv',{
                                         toolbox: toolboxString,
                                         zoom:{controls: true,wheel: true,startScale: 1.0,maxScale: 3,minScale: 0.3,scaleSpeed: 1.025},
                                         grid: {spacing: 20, length: 3, colour: '#222', snap: false},
                                         renderer:'thrasos', /* puzzle piece look*/
                                         // renderer:'geras', /* puzzle piece look, but more 3D looking */
                                         // renderer:'zelos',  /* bubble look*/
                                         trashcan: true
                                        }
                          );

workspace.registerToolboxCategoryCallback('EV3_MOTORS', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Motor" callbackKey="addMotorButtonPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('EV3Motor');
                                                                                    if(variableModelList.length>0){
                                                                                      xmlList.push(Blockly.Xml.textToDom('<label text="Motors"></label>'));
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'ev3_variables_get_motor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_run"><value name="SPEED"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_run_time"><value name="SPEED"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="TIME"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_run_angle"><value name="SPEED"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_run_until_stalled"><value name="SPEED"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="DUTY_LIMIT"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_speed"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_angle"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_reset_angle"><value name="ANGLE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_motor_stop_brake_hold"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
workspace.registerToolboxCategoryCallback('EV3_SENSORS', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Sensor" callbackKey="addSensorButtonPressed"></button>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="These blocks are for setting up the sensors"></label>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('EV3Sensor');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'ev3_variables_get_and_set_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_touch_sensor"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_colour_sensor"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_ultrasonic_sensor"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_gyro_sensor"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="The rest of the blocks are for use in your program"></label>'));
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'ev3_variables_get_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="Color Sensor"></label>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_color_sensor_color"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_color_sensor_ambient"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_color_sensor_reflection"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="Touch Sensor"></label>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_touch_sensor_pressed"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="Ultrasonic Sensor"></label>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_ultrasonic_sensor_distance"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<label text="Gyroscopic Sensor"></label>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_gyro_sensor_speed"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_gyro_angle_speed"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="ev3_gyro_sensor_reset_angle"><value name="ANGLE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
workspace.registerButtonCallback('addMotorButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'EV3Motor');
                                                                          }
                                );
workspace.registerButtonCallback('addSensorButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'EV3Sensor');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_LED', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New LED" callbackKey="addRPiLEDButtonPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_LED');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_led');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_led');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_led"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_on_off"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_toggle"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_is_lit"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_get_value"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_set_value"><value name="VALUE"><shadow type="math_number"><field name="NUM">0.9</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_blink"><value name="N"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="ON_TIME"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="OFF_TIME"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="FADE_IN_TIME"><shadow type="math_number"><field name="NUM">2</field></shadow></value><value name="FADE_OUT_TIME"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="NOT_BACKGROUND"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiLEDButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_LED');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_RGB_LED', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New RGB LED" callbackKey="addRPiRGBLEDButtonPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_RGB_LED');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_rgb_led');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_rgb_led');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_rgb_led"><value name="RED_PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="GREEN_PIN"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="BLUE_PIN"><shadow type="math_number"><field name="NUM">6</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_on_off"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_toggle"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_set_rgb_led_colour"><value name="COLOUR"><shadow type="hex_colour_to_tuple"><value name="COLOUR"><shadow type="colour_picker"><field name="COLOUR">#abcdef</field></shadow></value></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_is_lit"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_get_value"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_led_set_value"><value name="VALUE"><shadow type="hex_colour_to_tuple"><value name="COLOUR"><shadow type="colour_picker"><field name="COLOUR">#abcdef</field></shadow></value></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_rgb_led_blink"><value name="N"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="ON_TIME"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="OFF_TIME"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="FADE_IN_TIME"><shadow type="math_number"><field name="NUM">2</field></shadow></value><value name="FADE_OUT_TIME"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="ON_COLOR"><shadow type="hex_colour_to_tuple"><value name="COLOUR"><shadow type="colour_picker"><field name="COLOUR">#ffffff</field></shadow></value></shadow></value><value name="OFF_COLOR"><shadow type="hex_colour_to_tuple"><value name="COLOUR"><shadow type="colour_picker"><field name="COLOUR">#000000</field></shadow></value></shadow></value><value name="NOT_BACKGROUND"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="colour_tuple_values"><value name="RED"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="colour_tuple"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="hex_colour_to_tuple"><value name="COLOUR"><shadow type="colour_picker"><field name="COLOUR">#abcdef</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="colour_random"></block>'));

    
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiRGBLEDButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_RGB_LED');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_Buzzer', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Buzzer" callbackKey="addRPiBuzzerButtonPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Buzzer');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_buzzer');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_buzzer');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_buzzer"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_buzzer_beep"><value name="N"><shadow type="math_number"><field name="NUM">5</field></shadow></value><value name="ON_TIME"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="OFF_TIME"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="NOT_BACKGROUND"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_on_off"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_toggle"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_buzzer_is_active"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiBuzzerButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Buzzer');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_Servo', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Servo" callbackKey="addRPiServoPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Servo');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_servo');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_servo');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_servo"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_servo_turn_to_angle"><value name="ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiServoPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Servo');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_USonic_Sensor', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Ultrasonic Distance Sensor" callbackKey="addRPiUSonicSensorPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_USonic_Sensor');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_usonic_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_usonic_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_usonic_sensor"><value name="TRIG"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="ECHO"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_usonic_get_distance"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiUSonicSensorPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_USonic_Sensor');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_Motion_Sensor', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Motion Sensor" callbackKey="addRPiMotionSensorPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Motion_Sensor');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_motion_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_motion_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_motion_sensor"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_motion_detected"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
                                         
workspace.registerButtonCallback('addRPiMotionSensorPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Motion_Sensor');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_Button', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Button" callbackKey="addRPiButtonPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Button');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_button');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_button');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_button"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="PULL_UP"><shadow type="logic_boolean"><field name="BOOL">FALSE</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_button_is_pressed"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_button_wait"><value name="TIMEOUT_SECS"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiButtonPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Button');
                                                                          }
                                );

workspace.registerToolboxCategoryCallback('RPi_Light_Sensor', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Light Sensor" callbackKey="addRPiLightSensorPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Light_Sensor');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_light_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_light_sensor');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_light_sensor"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="THRESHOLD"><shadow type="math_number"><field name="NUM">0.1</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_light_detected"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_light_wait_until_light_dark"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_light_sensor_get_value"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiLightSensorPressed', function(button){
                                                                              Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Light_Sensor');
                                                                              console.log("Got here!")
                                                                             }
                                );


workspace.registerToolboxCategoryCallback('RPi_Digital_Input', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Digital Input" callbackKey="addRPiDigitalInputPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Digital_Input');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_digital_input');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_digital_input');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_digital_input"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_digital_input_is_active"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_digital_input_wait_until_active_inactive"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiDigitalInputPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Digital_Input');
                                                                          }
                                );


workspace.registerToolboxCategoryCallback('RPi_Digital_Output', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Digital Output" callbackKey="addRPiDigitalOutputPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Digital_Output');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_digital_output');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_digital_output');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_digital_output"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_on_off"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_toggle"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiDigitalOutputPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Digital_Output');
                                                                          }
                                );


workspace.registerToolboxCategoryCallback('RPi_PWM_Output', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New PWM Output" callbackKey="addRPiPWMOutputPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_PWM_Output');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_pwm_output');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_pwm_output');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_pwm_output"><value name="PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="FREQUENCY"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_on_off"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_toggle"></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_pwm_output_set_frequency"><value name="FREQUENCY"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_pwm_output_set_duty"><value name="DUTY"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiPWMOutputPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_PWM_Output');
                                                                          }
                                );


workspace.registerToolboxCategoryCallback('RPi_Rotary_Encoder', function(workspace){
                                                                                    var xmlList = [];
                                                                                    xmlList.push(Blockly.Xml.textToDom('<button text="Add New Rotary Encoder" callbackKey="addRPiRotaryEncoderPressed"></button>'));
                                                                                    var variableModelList = workspace.getVariablesOfType('RPi_Rotary_Encoder');
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_set_rotary_encoder');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    if(variableModelList.length>0){
                                                                                      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
                                                                                        var block = Blockly.utils.xml.createElement('block');
                                                                                        block.setAttribute('type', 'rpi_variables_get_rotary_encoder');
                                                                                        block.setAttribute('gap', 8);
                                                                                        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                                                                                        xmlList.push(block);
                                                                                      }
                                                                                    }
                                                                                    
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_new_rotary_encoder"><value name="CLK_PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="DT_PIN"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_rotary_encoder_wait"><value name="TIMEOUT_SECS"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block>'));
                                                                                    xmlList.push(Blockly.Xml.textToDom('<block type="rpi_rotary_encoder_steps"></block>'));
                                                                                    return xmlList;
                                                                                   }
                                         );
                                         
workspace.registerButtonCallback('addRPiRotaryEncoderPressed', function(button){
                                                                           Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'RPi_Rotary_Encoder');
                                                                          }
                                );

theme = workspace.getTheme();
var fontStyle = {
                 "family": "'Varela Round', Arial, sans-serif",
                 "weight": null,
                 "size": null 
                };
theme.setFontStyle(fontStyle);
workspace.setTheme(theme);

pythonTextArea = document.getElementById('python-div')
var codeMirrorEditor = CodeMirror(function(elt) {
  pythonTextArea.parentNode.replaceChild(elt, document.getElementById('python-div'));
  }, {
    value: "print('Hello, World!')\n",
    mode: "python",
    theme: "cobalt",
    readOnly: true,
    lineNumbers: true
  }
);

workspace.addChangeListener(updatePython);
updatePython();

var url = window.location.href;
if (url.includes('?file=')){
  fetch(url.substring(url.indexOf('?file=')+6))
    .then(response => response.text())
    .then((data) => {
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(data), workspace);
  })
}

function stopPython() {
  if (skulptIsRunning)
  {
    var defaultTimeLimit = Sk.execLimit;
    Sk.execLimit = 1;
    Sk.timeoutMsg = function() {
      Sk.execLimit = defaultTimeLimit;
      return "You exited while your Python program was still running";
    }
  }
}