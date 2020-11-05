/*
  
  This file generates the parser used in performance.
  
*/

const { readFileSync } = require('fs');
const { join } = require('path');
const { generate } = require('pegjs');

/* Read grammar file */
const grammarFilePath = join(__dirname + '/danceGrammar.pegjs');
const grammar = readFileSync(grammarFilePath).toString();

console.log('hi from parser');

/* Run parser */
const parser = generate(grammar);

console.log(parser.parse('accumulation 5 lunge'));
console.log(parser.parse('random'));
console.log(parser.parse('often 5 roll'));


exports.parser = parser;