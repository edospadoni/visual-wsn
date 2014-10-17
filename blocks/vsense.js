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

goog.provide('Blockly.Blocks.vsense');

goog.require('Blockly.Blocks');

Blockly.Blocks['set_leds'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("LED_NUM")
        .setCheck("Number")
        .appendField("set LED");
    this.appendValueInput("LED_STATE")
        .setCheck("Boolean")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['read_dios'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("DIOS")
        .setCheck("Number")
        .appendField("read DIGITALPIN");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['write_dios'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("DIOS")
        .setCheck("Number")
        .appendField("set DIGITALPIN");
    this.appendValueInput("DIOS_STATE")
        .setCheck("Boolean")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['config_adc'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("read ADC on CHANNEL")
        .appendField(new Blockly.FieldDropdown([["1", "CHANNEL0"], ["2", "CHANNEL2"], ["3", "CHANNEL3"], ["4", "CHANNEL4"], ["5", "CHANNEL5"], ["6", "CHANNEL6"]]), "CHANNEL")
        .appendField("with REF")
        .appendField(new Blockly.FieldDropdown([["1.5V", "REF1_5V"], ["2V", "REF2V"], ["2.5V", "REF2_5V"]]), "REF");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['sleep_mcu'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("TIME_NUM")
        .setCheck("Number")
        .appendField("deep sleep MCU for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["minutes", "m"], ["hours", "h"]]), "TIME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['standby_mcu'] = {
  init: function() {
    /*this.setColour(20);
    this.appendDummyInput()
        .appendField("stanby MCU")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');*/
    this.setColour(20);
    this.appendValueInput("TIME_NUM")
        .setCheck("Number")
        .appendField("standby MCU");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["minutes", "m"], ["hours", "h"]]), "TIME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['hybernate_mcu'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("TIME_NUM")
        .setCheck("Number")
        .appendField("hybernate MCU for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["minutes", "m"], ["hours", "h"]]), "TIME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mcu_frequency'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("set MCU frequency to")
        .appendField(new Blockly.FieldDropdown([["4MHz", "MCU_4MHZ"], ["8MHz", "MCU_8MHZ"], ["12MHz", "MCU_12MHZ"], ["16MHz", "MCU_16MHZ"], ["20MHz", "MCU_20MHZ"], ["25MHz", "MCU_25MHZ"]]), "FREQUENCY");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensors_read'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("read")
        .appendField(new Blockly.FieldDropdown([["external temperature", "et"], ["internal temperature", "it"], ["luminosity", "l"], ["pressure", "h"]]), "SENSORS");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.setColour(120);
    this.appendValueInput("TIME_NUMBER")
        .setCheck("Number")
        .appendField("wait for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["milliseconds", "ms"], ["seconds", "s"], ["minutes", "m"], ["hours", "h"]]), "TIME_UNIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['print_serial'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("print");
    this.appendDummyInput()
        .appendField("on serial port");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['print_line_serial'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("print line");
    this.appendDummyInput()
        .appendField("on serial port");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['read_serial'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("read from serial port");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

/*Blockly.Blocks['command_receive'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when receive command")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["get temperature", "GET_TEMP"], ["get luminosity", "GET_LIGHT"], ["get pressure", "GET_PRESSURE"], ["get avg temperature", "GET_AVG_TEMP"], ["get avg luminosity", "GET_AVG_LIGHT"], ["get avg pressure", "GET_AVG_PRES"]]), "COMMAND_NAME");
    this.appendStatementInput("BODY")
        .appendField("do");
    this.setTooltip('');
  }
};*/

Blockly.Blocks['command_receive'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when receive command")
        .appendField(new Blockly.FieldTextInput("command"), "COMMAND");
    this.appendStatementInput("BODY")
        .appendField("do");
    this.setTooltip('');
  }
};

Blockly.Blocks['command_receive_return'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("when receive command")
        .appendField(new Blockly.FieldDropdown([["init network", "INIT_NETWORK"], ["get temperature", "GET_TEMP"], ["get luminosity", "GET_LIGHT"], ["get pressure", "GET_PRESSURE"], ["get avg temperature", "GET_AVG_TEMP"], ["get avg luminosity", "GET_AVG_LIGHT"], ["get avg pressure", "GET_AVG_PRES"]]), "COMMAND");
    this.appendStatementInput("BODY")
        .appendField("do");
    this.appendValueInput("RETURN")
        .appendField("and send value to companion");
    this.setTooltip('');
  }
};

Blockly.Blocks['send_value_companion'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("VALUE")
        .appendField("send value to companion");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
