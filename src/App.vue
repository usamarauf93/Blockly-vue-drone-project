<script setup>
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Main Vue component that includes the Blockly component.
 * @author dcoodien@google.com (Dylan Coodien)
 */

import { ref } from "vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/stocks";

import { javascriptGenerator } from "blockly/javascript";

const foo = ref();
const code = ref();
const options = {
  media: "media/",
  grid: {
    spacing: 25,
    length: 3,
    colour: "#ccc",
    snap: true
  },
  toolbox: `
<xml>
    <category name="Motion" colour="#f85f54">
      <block type="drone_move_forward"></block>
      <block type="drone_move_backward"></block>
      <block type="drone_move_up"></block>
      <block type="drone_move_down"></block>
      <block type="drone_turn_left"></block>
      <block type="drone_turn_right"></block>
      <block type="drone_rotate_clockwise"></block>
      <block type="drone_rotate_counterclockwise"></block>
      <block type="drone_takeoff"></block>
      <block type="drone_land"></block>
      <block type="drone_hover"></block>
      <block type="drone_set_speed"></block>
      <block type="drone_flip"></block>
      <block type="drone_move_to_position"></block>
    </category>

    <category name="Fly" colour="#aaa666">
      <block type="active_fly"></block>
      <block type="take_off"></block>
      <block type="throttle">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">3</field>
          </block>
        </value>
      </block>
        <block type="rotate" id="rotateBlock" x="10" y="10">
          <field name="DIRECTION">LEFT</field>
          <field name="SPEED">0</field>
        </block>
        <block type="fly" id="flyBlock" x="10" y="10">
          <field name="DIRECTION">FRONT</field>
          <field name="SPEED">0</field>
        </block>
        <block type="set_init_direction" id="setInitDirectionBlock" x="10" y="10">
          <field name="INIT_DIRECTION">YES</field>
        </block>
    </category>

    <category name="Events" colour="#7a54f8">
      <block type="when_green_flag_clicked"></block>
    </category>

    <category name="Control" colour="#ccc222">
      <block type="wait" id="waitBlock" x="10" y="10">
        <field name="SECONDS">1</field>
      </block>
      <block type="wait_and_stop" id="waitAndStopBlock" x="10" y="10">
        <field name="SECONDS">1</field>
      </block>
      <block type="repeat_times" id="repeatTimesBlock" x="10" y="10">
        <field name="TIMES">1</field>
        <statement name="DO">
          <!-- Optionally, insert nested blocks here -->
        </statement>
      </block>
      <block type="forever" id="foreverBlock" x="10" y="10">
        <statement name="DO">
          <!-- Optionally, insert nested blocks here -->
        </statement>
      </block>
      <block type="if_then" id="ifThenBlock" x="10" y="10">
        <value name="CONDITION">
          <!-- Insert a block here that outputs a boolean value, e.g., a logic_compare block -->
        </value>
        <statement name="THEN">
          <!-- Optionally, insert nested blocks here that define what happens if the condition is true -->
        </statement>
      </block>
      <block type="if_then_else" id="ifThenElseBlock" x="10" y="10">
        <value name="CONDITION">
          <!-- Insert a block here that outputs a boolean value, e.g., a logic_compare block -->
        </value>
        <statement name="THEN">
          <!-- Optionally, insert nested blocks here that define what happens if the condition is true -->
        </statement>
        <statement name="ELSE">
          <!-- Optionally, insert nested blocks here that define what happens if the condition is false -->
        </statement>
      </block>
      <block type="repeat_until" id="repeatUntilBlock" x="10" y="10">
        <value name="CONDITION">
          <!-- Insert a block here that outputs a boolean value, e.g., a logic_compare block -->
        </value>
        <statement name="DO">
          <!-- Optionally, insert nested blocks here that define the actions to be repeated -->
        </statement>
      </block>
      <block type="stop" id="stopBlock" x="10" y="10">
        <field name="STOP_OPTION">ALL</field>
      </block>
    </category>
    <category name="sensing" colour="#ccc444">
      <block type="take_photo" id="takePhotoBlock" x="10" y="10"></block>
      <block type="start_record" id="startRecordBlock" x="10" y="10"></block>
      <block type="stop_record" id="stopRecordBlock" x="10" y="10"></block>
    </category>
    <category name="Operators" colour="#ddd444">
     <block type="add" x="10" y="10">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="subtract" x="10" y="50">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="multiply" x="10" y="90">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">3</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
  </block>
  <block type="divide" x="10" y="130">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">4</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
  </block>
   <block type="pick_random" id="pickRandomBlock" x="10" y="10">
    <value name="FROM">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="TO">
      <shadow type="math_number">
        <field name="NUM">100</field>
      </shadow>
    </value>
  </block>
  <block type="less_than" id="lessThanBlock" x="10" y="10">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
  </block>
  <block type="greater_than" id="greaterThanBlock" x="10" y="50">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="equals" id="equalsBlock" x="10" y="10">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="and" id="andBlock" x="10" y="10">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="or" id="orBlock" x="10" y="50">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="not" id="notBlock" x="10" y="90">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="modulus" id="modulusBlock" x="10" y="10">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">3</field>
      </shadow>
    </value>
  </block>
  <block type="round" id="roundBlock" x="10" y="10">
    <value name="NUM">
      <shadow type="math_number">
        <field name="NUM">3.5</field>
      </shadow>
    </value>
  </block>
    </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
  </category>
        </xml>`
};

const showCode = () =>
  (code.value = javascriptGenerator.workspaceToCode(foo.value.workspace));
</script>

<template>
  <div id="app">
    <div style="display: none">
      <img alt="Vue logo" src="./assets/logo.png" />
      <button id="greenFlag" style="display: block">Green Flag</button>
      <BlocklyComponent id="blockly1">
        <block type="controls_ifelse"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null" disabled="true"></block>
        <block type="logic_ternary"></block>
        <block type="text_charAt">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
        </block>
      </BlocklyComponent>
    </div>

    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
    <div id="code" style="display: none">
      <button v-on:click="showCode()">Show JavaScript</button>
      <pre v-html="code"></pre>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}

#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
