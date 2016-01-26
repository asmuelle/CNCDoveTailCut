#!/usr/bin/env node
'use strict';

var cncdovetailcut = require('./lib/cncdovetailcut');

var userArgs = process.argv;
var searchParam = userArgs[6];

var commandline = require('commander');

commandline
  .command('gcode')
  .description('create gcode')
  .option("-d, --toolDiameter [cm]", "Tool Diameter")
  .option("-x, --width [cm]", "Cutting width")
  .option("-y, --height [cm]", "Cutting Width")
  .option("-z, --depth [cm]", "Cutting Depth")
  .option("-s, --depthOfCut [cm]", "Depth of Cut")
  .option("-a, --alignment [inside|outside|center]", "Alignment of Cut")
  
  .action(function(options){
    if(options.toolDiameter ){
      return cncdovetailcut.getGcode(options);
    } else {
      console.log('Missing a required option!');
    }
  });

   
  

commandline.parse(process.argv);
