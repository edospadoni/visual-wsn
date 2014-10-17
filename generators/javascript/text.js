/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
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
 * @fileoverview Generating JavaScript for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.text');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['text'] = function(block) {
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_length'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length()', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['text_isEmpty'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  return ['(' + argument0 + '.length() == 0)', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['equals_string'] = function(block) {
  var value_string_one = Blockly.JavaScript.valueToCode(block, 'STRING_ONE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_string_two = Blockly.JavaScript.valueToCode(block, 'STRING_TWO', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_string_one+'.equals('+value_string_two+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};