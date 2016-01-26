#!/usr/bin/env node
'use strict';

var cncdovetailcut = require('./lib/cncdovetailcut');

var userArgs = process.argv;
var searchParam = userArgs[2];

var commandline = require('commander');

commandline
  .command('gcode')
  .description('create gcode')
  .option("-d, --toolDiameter [mm]", "Tool Diameter")
  
  .action(function(options){
    if(options.toolDiameter ){
      return cncdovetailcut.getGcode(options);
    } else {
      console.log('Missing a required option!');
    }
  });

   
  

commandline.parse(process.argv);
