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

goog.provide('Blockly.Blocks.messages');

goog.require('Blockly.Blocks');

Blockly.Blocks['select_protocol'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("select network protocol")
        .appendField(new Blockly.FieldDropdown([["null", "NULL"], ["minpath", "MINPATH"]]), "PROTOCOL");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['send_int_msg'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("send InterestMsg")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["temperature", "TEMP"], ["luminosity", "LIGHT"], ["pressure", "PRESSURE"]]), "DATA_MSG");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['send_data_msg'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("send DataMsg")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["temperature", "TEMP"], ["luminosity", "LIGHT"], ["pressure", "PRESSURE"]]), "META")
        .appendField("with value");
    this.appendValueInput("NODE_ID")
        .setCheck("Number")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['receive_int_msg'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("receive InterestMsg")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["temperature", "TEMP"], ["luminosity", "LIGHT"], ["pressure", "PRESSURE"]]), "INT_MSG");
    this.appendStatementInput("NAME")
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['receive_data_msg'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("receive DataMsg")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["temperature", "TEMP"], ["luminosity", "LIGHT"], ["pressure", "PRESSURE"]]), "DATA_MSG");
    this.appendStatementInput("NAME")
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['node_id'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("node id");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['msg_sender_id'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("sender id");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['msg_value'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField("data value");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['add_node_list'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("add");
    this.appendDummyInput()
        .appendField("to NodeList");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['contains_node_list'] = {
  init: function() {
    this.setColour(260);
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("is in NodeList");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['clear_node_list'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("clear NodeList");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['size_node_list'] = {
  init: function() {
    this.setColour(260);
    this.appendDummyInput()
        .appendField("get NodeList size");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};