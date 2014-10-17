// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Functions</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Error parsing XML:\\n%1\\n\\nSelect \'OK\' to abandon your changes or \'Cancel\' to further edit the XML.</span><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="external-js/jquery.js"><\/script><script type="text/javascript" src="external-js/jquery.qrcode.min.js"><\/script><script type="text/javascript" src="external-js/jquery-ui.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><table width="100%" height="100%"><tr><td><h1><span id="title"><h3>VirtualSense App Maker</h3></span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon">Blocks</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff">Java</td><td class="tabmax"><button id="runButton" class="notext primary"><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_javascript" class="content"></pre><textarea id="content_xml" class="content" wrap="off"></textarea>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Control"><block type="controls_if"></block><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="wait"></block></category><category name="Logic"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_modulo"></block></category><category name="Text"><block type="text"></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="equals_string"></block></category><category name="Variables"><block type="init_integer"></block><block type="init_shared_integer"></block><block type="init_boolean"></block><block type="init_shared_boolean"></block><block type="init_string"></block><block type="init_shared_string"></block><block type="set_integer"></block><block type="set_boolean"></block><block type="set_string"></block><block type="get_integer"></block><block type="get_boolean"></block><block type="get_string"></block></category><category name="Functions" custom="PROCEDURE"></category><category name="Events"><block type="trigger_event"></block><block type="wait_event"></block><block type="when_event"></block><block type="wait_interrupt"></block><block type="when_interrupt"></block><block type="set_timer_interrupt"></block><block type="wait_timer_interrupt"></block><block type="when_timer_interrupt"></block></category><category name="Sensors"><block type="sensors_read"></block></category><category name="Actuators"><block type="set_leds"></block></category><category name="Power Manager"><block type="sleep_mcu"></block><block type="standby_mcu"></block><block type="hybernate_mcu"></block><block type="mcu_frequency"></block></category><category name="Input"><block type="read_dios"></block><block type="config_adc"></block><block type="read_serial"></block></category><category name="Output"><block type="write_dios"></block><block type="print_serial"></block><block type="print_line_serial"></block></category><category name="Messages"><block type="select_protocol"></block><block type="send_int_msg"></block><block type="send_data_msg"></block><block type="receive_int_msg"></block><block type="receive_data_msg"></block><block type="node_id"></block><block type="msg_sender_id"></block><block type="msg_value"></block><block type="add_node_list"></block><block type="contains_node_list"></block><block type="clear_node_list"></block><block type="size_node_list"></block></category><category name="Companion"><block type="command_receive"></block><block type="command_receive_return"></block><block type="send_value_companion"></block></category></xml>';
};
