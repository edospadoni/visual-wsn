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
 * @fileoverview Generating JavaScript for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.messages');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['select_protocol'] = function(block) {
  var dropdown_protocol = block.getFieldValue('PROTOCOL');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['send_int_msg'] = function(block) {
  var dropdown_data_msg = block.getFieldValue('DATA_MSG');
  // TODO: Assemble JavaScript into code variable.
  var code = 'InterestMsg intMsg = new InterestMsg();\nintMsg.epoch = 1;\nintMsg.hops = 0;\nintMsg.nodeID = VirtualSense.getNodeId();\nintMsg.label = DataMsg.'+dropdown_data_msg+';\nVSenseApp.network.send(intMsg);\n';
  return code;
};

Blockly.JavaScript['send_data_msg'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_meta = block.getFieldValue('META');
  var value_node_id = Blockly.JavaScript.valueToCode(block, 'NODE_ID', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'DataMsg msg = new DataMsg(nodeId,(short)0);\nmsg.label = DataMsg.'+dropdown_meta+';\nmsg.value = '+value_value+';\nVSenseApp.network.sendTo(msg, '+value_node_id+');\n';
  return code;
};

Blockly.JavaScript['receive_int_msg'] = function(block) {
  var dropdown_data_msg = block.getFieldValue('INT_MSG');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Packet p = VSenseApp.network.receive();if(p instanceof InterestMsg){InterestMsg d = (InterestMsg)p;if(d.label == DataMsg.'+dropdown_data_msg+'){\n'+statements_name+'\n}\n} else {System.out.println("UNKNOWN");}\n';
  return code;
};

Blockly.JavaScript['receive_data_msg'] = function(block) {
  var dropdown_data_msg = block.getFieldValue('DATA_MSG');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Packet p = VSenseApp.network.receive();if(p instanceof DataMsg){DataMsg d = (DataMsg)p;if(d.label == DataMsg.'+dropdown_data_msg+'){\n'+statements_name+'\n}\n} else {System.out.println("UNKNOWN");}\n';
  return code;
};

Blockly.JavaScript['node_id'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'VirtualSense.getNodeId()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['msg_sender_id'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'd.sender_id';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['msg_value'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'd.value';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add_node_list'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'NodeList.add('+value_value+');\n';
  return code;
};

Blockly.JavaScript['contains_node_list'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'NodeList.contains('+value_value+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['clear_node_list'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'NodeList.clear();\n';
  return code;
};

Blockly.JavaScript['size_node_list'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'NodeList.size()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};