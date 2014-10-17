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

goog.provide('Blockly.Blocks.events');

goog.require('Blockly.Blocks');

Blockly.Blocks['z_event_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when vsense starts");
    this.appendStatementInput("NAME")
        .appendField("do");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['trigger_event'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("trigger")
        .appendField(new Blockly.FieldTextInput("event"), "EVENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('EVENT')];
  }
};

Blockly.Blocks['wait_event'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("wait")
        .appendField(new Blockly.FieldVariable("event"), "EVENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['when_event'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldVariable("event"), "EVENT");
    this.appendStatementInput("CODE")
        .appendField("do");
    this.setTooltip('');
  }
};

Blockly.Blocks['when_interrupt'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when interrupt on pin")
        .appendField(new Blockly.FieldDropdown([["0", "INT0"], ["1", "INT1"], ["2", "INT2"], ["3", "INT3"], ["4", "INT4"]]), "PIN");
    this.appendStatementInput("CODE")
        .appendField("do");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['wait_interrupt'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("wait for interrupt on pin")
        .appendField(new Blockly.FieldDropdown([["0", "INT0"], ["1", "INT1"], ["2", "INT2"], ["3", "INT3"], ["4", "INT4"]]), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['set_timer_interrupt'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("TIME_NUM")
        .setCheck("Number")
        .appendField("set timer interrupt to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["minutes", "m"], ["hours", "h"]]), "TIME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['when_timer_interrupt'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when timer interrupt");
    this.appendStatementInput("NAME")
        .appendField("do");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['wait_timer_interrupt'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("wait for timer interrupt");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};