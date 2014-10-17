/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');


Blockly.Blocks['get_integer'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
        .appendField("get integer")
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['get_boolean'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(210);
    this.appendDummyInput()
        .appendField("get boolean")
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true, "Boolean");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['get_string'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(160);
    this.appendDummyInput()
        .appendField("get string")
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['set_integer'] = {
  init: function() {
    this.setColour(230);
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("set integer")
        .appendField(new Blockly.FieldVariable("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['set_boolean'] = {
  init: function() {
    this.setColour(210);
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField("set boolean")
        .appendField(new Blockly.FieldVariable("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['set_string'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("set string")
        .appendField(new Blockly.FieldVariable("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['init_integer'] = {
  init: function() {
    this.setColour(230);
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("initialize integer")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Blocks['init_shared_integer'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput("VALUE")
        .appendField("initialize shared integer")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return ['SharedVariables.'+this.getFieldValue('VAR')];
  }
};

Blockly.Blocks['init_boolean'] = {
  init: function() {
    this.setColour(210);
    this.appendValueInput("VALUE")
        .setCheck("Boolean")
        .appendField("initialize boolean")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Blocks['init_shared_boolean'] = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput("VALUE")
        .appendField("initialize shared boolean")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Blocks['init_string'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("initialize string")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Blocks['init_shared_string'] = {
  init: function() {
    this.setColour(160);
    this.appendDummyInput("VALUE")
        .appendField("initialize shared string")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  }
};