/**
 * @license
 * Virtualsense Ad Hoc Blocks
 *
 * Copyright 2014 Edoardo Spadoni
 * http://tesi.edoardospadoni.it/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Virtualsense Ad Hoc Blocks.
 * @author Edoardo Spadoni
 */
'use strict';

goog.provide('Blockly.JavaScript.vsense');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['set_leds'] = function(block) {
  var value_led_num = Blockly.JavaScript.valueToCode(block, 'LED_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var value_led_state = Blockly.JavaScript.valueToCode(block, 'LED_STATE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Leds.setLed('+value_led_num+','+value_led_state+');\n';
  return code;
};

Blockly.JavaScript['read_dios'] = function(block) {
  var value_dios = Blockly.JavaScript.valueToCode(block, 'DIOS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'digit['+value_dios+'].read()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['write_dios'] = function(block) {
  var value_dios = Blockly.JavaScript.valueToCode(block, 'DIOS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dios_state = Blockly.JavaScript.valueToCode(block, 'DIOS_STATE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'digit['+value_dios+'].write('+value_dios_state+');\n';
  return code;
};

Blockly.JavaScript['config_adc'] = function(block) {
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_ref = block.getFieldValue('REF');
  var code = 'ADC.readIntRef(ADC.'+dropdown_channel+', ADC.'+dropdown_ref+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sleep_mcu'] = function(block) {
  var value_time_num = Blockly.JavaScript.valueToCode(block, 'TIME_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_time = block.getFieldValue('TIME');
  var code = 'PowerManager.deepSleep('+(dropdown_time == 'h' ? '('+value_time_num+')*60' : value_time_num)+');\n';
  return code;
};

Blockly.JavaScript['standby_mcu'] = function(block) {
  var value_time_num = Blockly.JavaScript.valueToCode(block, 'TIME_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_time = block.getFieldValue('TIME');
  var code = 'PowerManager.scheduleRTCInterruptAfter('+(dropdown_time == 'h' ? '('+value_time_num+')*60' : value_time_num)+');\nPowerManager.standby();\n';
  return code;
};

Blockly.JavaScript['hybernate_mcu'] = function(block) {
  var value_time_num = Blockly.JavaScript.valueToCode(block, 'TIME_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_time = block.getFieldValue('TIME');
  var code = 'PowerManager.systemHibernation('+(dropdown_time == 'h' ? '('+value_time_num+')*60' : value_time_num)+');\n';
  return code;
};

Blockly.JavaScript['mcu_frequency'] = function(block) {
  var dropdown_frequency = block.getFieldValue('FREQUENCY');
  var code = 'PowerManager.setMCUFrequency(PowerManager.'+dropdown_frequency+');\n';
  return code;
};

Blockly.JavaScript['sensors_read'] = function(block) {
  var dropdown_sensor = block.getFieldValue('SENSORS');
  var code = '';

  if(dropdown_sensor == 'et')
  	code = '(short)(Temperature.getValue()/100)';
  if(dropdown_sensor == 'it')
  	code = '(short)(Temperature.getBoardValue()/100)';
  if(dropdown_sensor == 'l')
  	code = '(short)(Light.getValue())';
  if(dropdown_sensor == 'h')
  	code = '(short)(Pressure.getValue())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['wait'] = function(block) {
  var value_time_number = Blockly.JavaScript.valueToCode(block, 'TIME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_time_unit = block.getFieldValue('TIME_UNIT');
  var value = 0;

  if(dropdown_time_unit == 'ms')
    value = '('+value_time_number +')';
  
  if(dropdown_time_unit == 's')
    value = '('+value_time_number +')*1000';

  if(dropdown_time_unit == 'm')
    value = '('+value_time_number +')*1000*60';

  if(dropdown_time_unit == 'h')
    value = '('+value_time_number +')*1000*60*60';

  var code = 'Thread.sleep('+value+');\n';
  return code;
};

Blockly.JavaScript['print_serial'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return 'System.out.print(' + value_name + ');\n';
};

Blockly.JavaScript['print_line_serial'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return 'System.out.println(' + value_name + ');\n';
};

Blockly.JavaScript['read_serial'] = function(block) {
  var code = 'UART.readline()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*Blockly.JavaScript['command_receive'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var dropdown_command_name = block.getFieldValue('COMMAND_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_body;
  return code;
};*/
Blockly.JavaScript['command_receive'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var text_command = block.getFieldValue('COMMAND');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_body;
  return code;
};

Blockly.JavaScript['command_receive_return'] = function(block) {
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var value_return = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_command_name = block.getFieldValue('COMMAND');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_body;
  return code;
};

Blockly.JavaScript['send_value_companion'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'CompanionApp.sendValue('+value_value+');\n';
  return code;
};
