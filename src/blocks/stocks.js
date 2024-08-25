

/* eslint-disable prettier/prettier */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Define custom blocks for drone motion.
 * @author
 */

import * as Blockly from 'blockly/core';
import {javascriptGenerator, Order} from 'blockly/javascript';

// Define custom drone motion blocks

Blockly.Blocks['drone_move_forward'] = {
  init: function () {
    this.appendDummyInput().appendField('Move Forward');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move the drone forward');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_move_forward'] = function (block, generator) {
  const code = 'Moveforward';
  return code;
};

Blockly.Blocks['drone_move_backward'] = {
  init: function () {
    this.appendDummyInput().appendField('Move Backward');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move the drone backward');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_move_backward'] = function (block, generator) {
  const code = 'Movebackward';
  return code;
};

Blockly.Blocks['drone_move_up'] = {
  init: function () {
    this.appendDummyInput().appendField('Move Up');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move the drone up');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_move_up'] = function (block, generator) {
  const code = 'Moveup';
  return code;
};

Blockly.Blocks['drone_move_down'] = {
  init: function () {
    this.appendDummyInput().appendField('Move Down');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move the drone down');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_move_down'] = function (block, generator) {
  const code = 'Movedown';
  return code;
};

Blockly.Blocks['drone_turn_left'] = {
  init: function () {
    this.appendDummyInput().appendField('Turn Left');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Turn the drone left');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_turn_left'] = function (block, generator) {
  const code = 'Turnleft';
  return code;
};

Blockly.Blocks['drone_turn_right'] = {
  init: function () {
    this.appendDummyInput().appendField('Turn Right');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Turn the drone right');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_turn_right'] = function (block, generator) {
  const code = 'Turnright';
  return code;
};

Blockly.Blocks['drone_rotate_clockwise'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate Clockwise');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Rotate the drone clockwise');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_rotate_clockwise'] = function (block, generator) {
  const code = 'Rotateclockwise';
  return code;
};

Blockly.Blocks['drone_rotate_counterclockwise'] = {
  init: function () {
    this.appendDummyInput().appendField('Rotate Counterclockwise');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Rotate the drone counterclockwise');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_rotate_counterclockwise'] = function (block, generator) {
  const code = 'Rotatecounterclockwise';
  return code;
};

Blockly.Blocks['drone_takeoff'] = {
  init: function () {
    this.appendDummyInput().appendField('Takeoff');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Takeoff the drone');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_takeoff'] = function (block, generator) {
  const code = 'Takeoff';
  return code;
};

Blockly.Blocks['drone_land'] = {
  init: function () {
    this.appendDummyInput().appendField('Land');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Land the drone');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_land'] = function (block, generator) {
  const code = 'Land';
  return code;
};

Blockly.Blocks['drone_hover'] = {
  init: function () {
    this.appendDummyInput().appendField('Hover');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Hover the drone');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_hover'] = function (block, generator) {
  const code = 'Hover';
  return code;
};

Blockly.Blocks['drone_set_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Set Speed')
      .appendField(new Blockly.FieldNumber(0, 0, 100), 'SPEED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Set the drone speed');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_set_speed'] = function (block, generator) {
  const speed = block.getFieldValue('SPEED');
  const code = `Setspeed(${speed})`;
  return code;
};

Blockly.Blocks['drone_flip'] = {
  init: function () {
    this.appendDummyInput().appendField('Flip');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Flip the drone');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_flip'] = function (block, generator) {
  const code = 'Flip';
  return code;
};

Blockly.Blocks['active_fly'] = {
  init: function ()  {
    this.appendDummyInput().appendField('Active Fly 🔒');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('Start Flying');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['active_fly'] = function (block, generator) {
  const code = 'Active_fly';
  return code;
}

Blockly.Blocks['take_off'] = {
  init: function () {
    this.appendDummyInput().appendField('Take off');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('Take off');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['take_off'] = function (block, generator) {
  const code = 'Take_off';
  return code;
}

Blockly.Blocks['throttle'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Set throttle to')
      .appendField(new Blockly.FieldNumber(3, 0, Infinity, 1), 'THROTTLE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190); // Set a different color, change as needed
    this.setTooltip('Set the drone\'s throttle');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['throttle'] = function(block, generator) {
  const throttle = block.getFieldValue('THROTTLE');
  const code = `Throttle(${throttle})`;
  return code;
}

Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Rotate')
      .appendField(new Blockly.FieldDropdown([
        ['left',`Left`], ['right',`Right`]
      ]), 'DIRECTION')
      .appendField('at speed')
      .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'], ['2', '2']]), 'SPEED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('Rotate the device left or right at specified speed');
    this.setHelpUrl('');
  }
}


javascriptGenerator.forBlock['rotate'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const speed = block.getFieldValue('SPEED');
  console.log('DIRECTION',direction);
  const code = `Rotate(${direction},${speed})`;
  return code;
}

Blockly.Blocks['fly'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Fly')
      .appendField(new Blockly.FieldDropdown([
        ['front', `Front`],
        ['back', 'Back'],
        ['left', 'Left'],
        ['right', 'Right']
      ]), 'DIRECTION')
      .appendField('at speed')
      .appendField(new Blockly.FieldDropdown([
        ['0', '0'],
        ['1', '1'],
        ['2', '2']
      ]), 'SPEED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Fly the drone in the selected direction at specified speed');
    this.setHelpUrl('');
  }
}
javascriptGenerator.forBlock['fly'] = function(block) {
  const direction = block.getFieldValue('DIRECTION');
  const speed = block.getFieldValue('SPEED');
  const code = `Fly(${direction},${speed})\n`;
  return code;
}

Blockly.Blocks['set_init_direction'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Set initial direction')
      .appendField(new Blockly.FieldDropdown([
        ['Yes', 'Yes'],
        ['No', 'No']
      ]), 'INIT_DIRECTION');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);  // Adjust the color as needed
    this.setTooltip('Sets the initial direction of the device');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['set_init_direction'] = function(block) {
  const initDirection = block.getFieldValue('INIT_DIRECTION');
  const code = `Setinitialdirection(${initDirection})\n`;
  return code;
}

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Wait')
      .appendField(new Blockly.FieldNumber(1, 0, Infinity, 0.1), 'SECONDS')  // Default 1 second, min 0, no max, step 0.1
      .appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);  // Adjust the color as needed
    this.setTooltip('Pauses the program for the specified number of seconds');
    this.setHelpUrl('');
  }
}


javascriptGenerator.forBlock['wait'] = function(block) {
  const seconds = block.getFieldValue('SECONDS');
  const code = `Wait(${seconds})\n`;
  return code;
}

Blockly.Blocks['wait_and_stop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Wait')
      .appendField(new Blockly.FieldNumber(1, 0, Infinity, 0.1), 'SECONDS')  // Default 1 second, min 0, no max, step 0.1
      .appendField('seconds and stop');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);  // Adjust the color as needed
    this.setTooltip('Pauses the program for the specified number of seconds and then stops');
    this.setHelpUrl('');
  }
}
javascriptGenerator.forBlock['wait_and_stop'] = function(block) {
  const seconds = block.getFieldValue('SECONDS');
  const code = `Wait(${seconds}) stop() `;
  return code;
}

Blockly.Blocks['repeat_times'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Repeat')
      .appendField(new Blockly.FieldNumber(1, 1, Infinity, 1), 'TIMES')  // Default 1 time, minimum 1, no maximum limit
      .appendField('times');
    this.appendStatementInput('DO')
      .setCheck(null)
      .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);  // Adjust the color as needed
    this.setTooltip('Repeats the enclosed blocks a specified number of times');
    this.setHelpUrl('');
  }
}
javascriptGenerator.forBlock['repeat_times'] = function(block) {
  const times = block.getFieldValue('TIMES');
  const statements = javascriptGenerator.statementToCode(block, 'DO');
  const code = `For (let i = 0; i < ${times}; i++){${statements} }\n`;
  return code;
}

Blockly.Blocks['forever'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Forever');
    this.appendStatementInput('DO')
      .setCheck(null)
      .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false);  // This block cannot have subsequent statements
    this.setColour(120);  // Adjust the color as needed
    this.setTooltip('Executes the enclosed blocks continuously forever');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['forever'] = function(block) {
  const statements =javascriptGenerator.statementToCode(block, 'DO');
  const code = `While (true) {${statements} }\n`;
  return code;
}

Blockly.Blocks['if_then'] = {
  init: function() {
    this.appendValueInput("CONDITION")
      .appendField("if");
    this.appendStatementInput("THEN")
      .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);  // Adjust the color as needed
    this.setTooltip('Executes the following blocks if the condition is true');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['if_then'] = function(block) {
  const condition = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_NONE) || 'false';
  const branch = javascriptGenerator.statementToCode(block, 'THEN');
  const code = `If (${condition}) {${branch} }\n`;
  return code;
}

Blockly.Blocks['if_then_else'] = {
  init: function() {
    this.appendValueInput("CONDITION")
      .appendField("if");
    this.appendStatementInput("THEN")
      .appendField("then");
    this.appendStatementInput("ELSE")
      .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);  // Adjust the color as needed
    this.setTooltip('Executes "then" blocks if the condition is true, otherwise executes "else" blocks');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['if_then_else'] = function(block) {
  const condition = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_NONE) || 'false';
  const thenBranch = javascriptGenerator.statementToCode(block, 'THEN');
  const elseBranch = javascriptGenerator.statementToCode(block, 'ELSE');
  const code = `If (${condition}) {${thenBranch} } else {${elseBranch} `;
  return code;
}

Blockly.Blocks['repeat_until'] = {
  init: function() {
    this.appendValueInput("CONDITION")
      .appendField("repeat until");
    this.appendStatementInput("DO")
      .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);  // Adjust the color as needed
    this.setTooltip('Repeats the enclosed blocks until the condition is true');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['repeat_until'] = function(block) {
  const condition = javascriptGenerator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_NONE) || 'false';
  const statements = javascriptGenerator.statementToCode(block, 'DO');
  const code = `While (!(${condition})) {${statements}}`;
  return code;
}

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop")
      .appendField(new Blockly.FieldDropdown([
        ["all", "All"],
        ["this script", "THIS_SCRIPT"],
        ["other scripts in sprite", "OTHER_SCRIPTS"]
      ]), "STOP_OPTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);  // Adjust the color as needed
    this.setTooltip('Stops scripts based on selected option');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['stop'] = function(block) {
  const stopOption = block.getFieldValue('STOP_OPTION');
  const code = `Stop('${stopOption}')`;
  return code;
}

Blockly.Blocks['take_photo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Take Photo 📷");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);  // Choose a color that fits the media or action category
    this.setTooltip('Triggers the device to take a photo');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['take_photo'] = function(block) {
  const code = `Takephoto`;
  return code;
}

Blockly.Blocks['start_record'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Start Recording 🎥");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);  // Choose a color that fits the media or action category
    this.setTooltip('Starts recording audio or video');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['start_record'] = function(block) {
  const code = `Startrecording`;
  return code;
}

Blockly.Blocks['stop_record'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop Recording");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);  // Choose a color that fits the media or action category
    this.setTooltip('Stops the current recording of audio or video');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['stop_record'] = function(block) {
  const code = `Stoprecording`;
  return code;
}

Blockly.Blocks['add'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Adds two numbers');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['subtract'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Subtracts two numbers');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['multiply'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("*");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Multiplies two numbers');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['divide'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("/");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Divides two numbers');
    this.setHelpUrl('');
  }
};

javascriptGenerator.forBlock['add'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_ADDITION) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_ADDITION) || '0';
  const code = `${a} + ${b}`;
  return code;
};

javascriptGenerator.forBlock['subtract'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_SUBTRACTION) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_SUBTRACTION) || '0';
  const code = `${a} - ${b}`;
  return code;
};

javascriptGenerator.forBlock['multiply'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_MULTIPLICATION) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_MULTIPLICATION) || '0';
  const code = `${a} * ${b}`;
  return code;
};

javascriptGenerator.forBlock['divide'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_DIVISION) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_DIVISION) || '0';
  const code = `${a} / ${b}`;
  return code;
};

Blockly.Blocks['pick_random'] = {
  init: function() {
    this.appendValueInput("FROM")
      .setCheck("Number")
      .appendField("Pick random");
    this.appendValueInput("TO")
      .setCheck("Number")
      .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Picks a random number between the specified start and end values');
    this.setHelpUrl('');
  }
}

javascriptGenerator.forBlock['pick_random'] = function(block) {
  const from = javascriptGenerator.valueToCode(block, 'FROM', javascriptGenerator.ORDER_COMMA) || '0';
  const to = javascriptGenerator.valueToCode(block, 'TO', javascriptGenerator.ORDER_COMMA) || '0';
  const code = `Math.floor(Math.random() * (${to} - ${from} + 1) + ${from})`;
  return code;
}

Blockly.Blocks['less_than'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("<");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('Returns true if the first number is less than the second number');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['greater_than'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField(">");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");  // Set output to return a Boolean value

    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('Returns true if the first number is greater than the second number');
    this.setHelpUrl('');
  }
};

javascriptGenerator.forBlock['less_than'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_RELATIONAL) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_RELATIONAL) || '0';
  const code = `${a} < ${b}`;
  return code;
};

javascriptGenerator.forBlock['greater_than'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_RELATIONAL) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_RELATIONAL) || '0';
  const code = `${a} > ${b}`;
  return code;
};

Blockly.Blocks['equals'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");  // Set output to return a Boolean value
    this.setColour(210);
    this.setTooltip('Returns true if the first number is equal to the second number');
    this.setHelpUrl('');
  }
};


javascriptGenerator.forBlock['equals'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_EQUALITY) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_EQUALITY) || '0';
  const code = `(${a} === ${b})`;  // Return a Boolean expression as a tuple value
  return [code, javascriptGenerator.ORDER_EQUALITY];
};


Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('Returns true if both numbers are non-zero');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("or");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('Returns true if at least one number is non-zero');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number")
      .appendField("not");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip('Returns true if the number is zero');
    this.setHelpUrl('');
  }
};

javascriptGenerator.forBlock['and'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_LOGICAL_AND) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_LOGICAL_AND) || '0';
  const code = `(${a} !== 0 && ${b} !== 0)`;
  return code;
};

javascriptGenerator.forBlock['or'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_LOGICAL_OR) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_LOGICAL_OR) || '0';
  const code = `(${a} !== 0 || ${b} !== 0)`;
  return code;
};

javascriptGenerator.forBlock['not'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_LOGICAL_NOT) || '0';
  const code = `(${a} === 0)`;
  return code;
};

Blockly.Blocks['modulus'] = {
  init: function() {
    this.appendValueInput("A")
      .setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("mod");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Calculates the remainder of the division of two numbers');
    this.setHelpUrl('');
  }
};

javascriptGenerator.forBlock['modulus'] = function(block) {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_MODULUS) || '0';
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_MODULUS) || '1'; // To prevent division by zero error
  const code = `${a} % ${b}`;
  return code;
};

Blockly.Blocks['round'] = {
  init: function() {
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField("Round");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Rounds a number to the nearest integer');
    this.setHelpUrl('');
  }
};

javascriptGenerator.forBlock['round'] = function(block) {
  const num = javascriptGenerator.valueToCode(block, 'NUM', javascriptGenerator.ORDER_FUNCTION_CALL) || '0';
  const code = `Math.round(${num})`;
  return code;
};


Blockly.Blocks['drone_move_to_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Move to position X:')
      .appendField(new Blockly.FieldNumber(0), 'X')
      .appendField('Y:')
      .appendField(new Blockly.FieldNumber(0), 'Y')
      .appendField('Z:')
      .appendField(new Blockly.FieldNumber(0), 'Z');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move the drone to a specific position');
    this.setHelpUrl('');
  },
};

javascriptGenerator.forBlock['drone_move_to_position'] = function (block, generator) {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  const z = block.getFieldValue('Z');
  const code = `Movetoposition(${x},${y},${z})`;
  return code;
};

// Define the 'when_green_flag_clicked' block
// Define the 'when_green_flag_clicked' block
Blockly.Blocks['when_green_flag_clicked'] = {
  init: function () {
    this.appendDummyInput().appendField('When ️ 🏳️ Clicked');
    this.appendStatementInput('DO')
      .setCheck(null)
      .appendField('');
    // this.setPreviousStatement(true, null);  // Allow block to be attached before
    //this.setNextStatement(true, null);      // Allow block to be attached after
    this.setColour(120);
    this.setTooltip('Executes the blocks when the green flag is clicked.');
    this.setHelpUrl('');
  },
};


javascriptGenerator.forBlock['when_green_flag_clicked'] = function(block) {
  var statements_code = javascriptGenerator.statementToCode(block, 'DO');
  var code = `${statements_code}`;
  return code;
};

// window.whenGreenFlagClicked = function(callback) {
//   console.log('whenGreenFlagClicked function is triggered');

//   // Retrieve the Blockly workspace and generate the code
//   const workspace = Blockly.getMainWorkspace();
//   let code = javascriptGenerator.workspaceToCode(workspace);

//   // Add spaces between commands if needed
//   code = code.replace(/([a-z])([A-Z])/g, '$1 $2');
//   console.log('code with spaces:', code);

//   // Split the generated code into an array of commands based on known delimiters
//   // const commands = code

//   let commands;
//   let concatenatedCommands;
//   // Concatenate commands with 'and'
//   // if (!code.includes('Left') && !code.includes('Right')) {
//     commands = code.split(/(?=[A-Z])/).filter(command => command.trim() !== '').map(command => command.trim());
//     console.log('commands:', commands);
//     concatenatedCommands = commands.join(' and ');
//   // }else{
//   //   concatenatedCommands = code;
//   // }
//   // Create the JSON output
//   const jsonOutput = JSON.stringify({ code: concatenatedCommands });

//   console.log('Generated JSON output:', jsonOutput);

//   // Call the callback with the JSON output
//   if (typeof callback === 'function') {
//     callback(jsonOutput);
//   }

//   // Return JSON output to Flutter
//   return jsonOutput;
// };
window.whenGreenFlagClicked = function(callback) {
  console.log('whenGreenFlagClicked function is triggered');

  // Retrieve the Blockly workspace and generate the code
  const workspace = Blockly.getMainWorkspace();
  let code = javascriptGenerator.workspaceToCode(workspace);

  console.log('Original code:', code);

  // Correctly format parameter lists and remove unwanted characters
  code = code.replace(/'\s*and\s*/g, '');
  code = code.replace(/(\w+)\('(\w+)',\s*(\d+)\)/g, "$1($2,$3)");

  // Detect and insert " and " only between distinct commands
  code = code.replace(/([)])\s*([A-Z][a-z]+)/g, "$1 and $2");  // Right after a parenthesis if followed by a capital letter
  code = code.replace(/([a-z])([A-Z])/g, "$1 and $2"); // Standard camelCase within different words not covered by the first

  // Cleanup: Avoid duplicate "and" accidentally inserted
  code = code.replace(/and\s+and/g, "and");

  // Trim whitespace for clean output
  code = code.trim();

  // Log the corrected code
  console.log('Corrected code:', code);

  // Create the JSON output
  const jsonOutput = JSON.stringify({ code: code });

  console.log('Generated JSON output:', jsonOutput);

  // Call the callback with the JSON output
  if (typeof callback === 'function') {
    callback(jsonOutput);
  }

  // Return JSON output to Flutter
  return jsonOutput;
};
// Define the 'when_red_flag_clicked' block
Blockly.Blocks['when_red_flag_clicked'] = {
  init: function () {
    this.appendDummyInput().appendField('when red flag clicked');
    this.setColour(120);
    this.setTooltip('Executes the drone land action when the red flag is clicked.');
    this.setHelpUrl('');
  },
};

// JavaScript generator for the 'when_red_flag_clicked' block
javascriptGenerator.forBlock['when_red_flag_clicked'] = function(block) {
  return 'Land';
};

window.whenRedFlagClicked = function(callback) {
  console.log('whenRedFlagClicked function is triggered');

  // Since the action is predefined, we directly set the code
  const action = 'Land';

  // Create the JSON output
  const jsonOutput = JSON.stringify({ code: action });

  console.log('Generated JSON output:', jsonOutput);

  // Call the callback with the JSON output
  if (typeof callback === 'function') {
    callback(jsonOutput);
  }

  // Return JSON output to Flutter
  return jsonOutput;
};
