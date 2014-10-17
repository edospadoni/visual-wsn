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

goog.provide('Blockly.JavaScript.events');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['z_event_start'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = statements_name;
  return code;
};

function isInArray(value, array) { return array.indexOf(value) > -1; }

Blockly.JavaScript['trigger_event'] = function(block) {
  var text_name = block.getFieldValue('EVENT');
  var code = 'sem_'+text_name+'.release();\n';
  return code;
};

Blockly.JavaScript['wait_event'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EVENT'), Blockly.Variables.NAME_TYPE);
  var code = 'sem_'+variable_name+'.acquire();\n';
  return code;
};

Blockly.JavaScript['when_event'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EVENT'), Blockly.Variables.NAME_TYPE);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var code = statements_code;
  return code;
};

Blockly.JavaScript['when_interrupt'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'CODE');
  var code = 'this.int_'+dropdown_pin+'.waitForInterrupt();\n';
  code = code + statements_name + '\n';
  return code;
};

Blockly.JavaScript['wait_interrupt'] = function(block) {
  var dropdown_pin = block.getFieldValue('PIN');
  var code = 'InterruptPin int_'+dropdown_pin+' = new InterruptPin(true, InterruptPin.'+dropdown_pin+');\nint_'+dropdown_pin+'.waitForInterrupt();\n';
  return code;
};

Blockly.JavaScript['set_timer_interrupt'] = function(block) {
  var value_time_num = Blockly.JavaScript.valueToCode(block, 'TIME_NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_time = block.getFieldValue('TIME');
  var code = 'PowerManager.scheduleRTCInterruptAfter('+(dropdown_time == 'h' ? '('+value_time_num+')*60' : value_time_num)+');\n';
  return code;
};

Blockly.JavaScript['when_timer_interrupt'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = statements_name;
  return code;
};

Blockly.JavaScript['wait_timer_interrupt'] = function(block) {
  var code = '...';
  return code;
};