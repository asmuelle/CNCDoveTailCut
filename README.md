# (Round) CNCDoveTailCut
Generate GCode for cutting dove tail joints with a CNC milling machine

## Getting Started

Install the module with: 
```sh
$ npm install cncdovetailcut
```


Install with cli command

```sh
$ npm install -g cncdovetailcut
```


 



## Documentation

The following commands are available to use:

_Usage:_ cncdovetailcut gcode [options] [command]

_Commands:_

  gcode [options] 
     generate gcode for specified parameters
   
   
    

_Options:_

  -h, --help             output usage information
  -v, --version          Program version
   

 

##Credits

* converting canvas to GCode: [GCanvas](https://github.com/em/gcanvas)
* drawing a smooth line (millable from inside and outside) through a number of points: [Cardinal-Spline-JS](https://github.com/epistemex/cardinal-spline-js)
