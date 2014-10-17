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
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.text');

goog.require('Blockly.Blocks');


Blockly.Blocks['text'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  },
  newQuote_: function(open) {
    if (open == Blockly.RTL) {
      var file = 'quote1.png';
    } else {
      var file = 'quote0.png';
    }
    return new Blockly.FieldImage(Blockly.pathToBlockly + 'media/' + file,
                                  12, 12, '"');
  }
};

Blockly.Blocks['text_length'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_LENGTH_HELPURL);
    this.setColour(160);
    this.interpolateMsg(Blockly.Msg.TEXT_LENGTH_TITLE,
                        ['VALUE', ['String', 'Array'], Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TEXT_LENGTH_TOOLTIP);
  }
};

Blockly.Blocks['text_isEmpty'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_ISEMPTY_HELPURL);
    this.setColour(160);
    this.interpolateMsg(Blockly.Msg.TEXT_ISEMPTY_TITLE,
                        ['VALUE', ['String', 'Array'], Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TEXT_ISEMPTY_TOOLTIP);
  }
};

Blockly.Blocks['equals_string'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput("STRING_ONE")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("is equal");
    this.appendValueInput("STRING_TWO")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};