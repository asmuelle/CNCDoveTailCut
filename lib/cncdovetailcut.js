var Gcanvas = require('gcanvas');
var cardinalSpline = require("cardinal-spline-js/curve_func");

exports.getGcode=function(options){

var driver = new Gcanvas.GcodeDriver({
  write: function(cmd) {
    console.log(cmd);
  }
});

var ctx = new Gcanvas(driver);
var width=options.width;
var height=options.height;
var nTails=options.ntails;
var d1=width/nTails;

var d2=d1/10;
var pts=        [   0, height];
for (var n=0;n<nTails;n++) {

    pts.push(n*d1+ d2*3);pts.push(height);
    pts.push(n*d1+ d2*2);pts.push(height/3);
    pts.push(n*d1+ d2*5);pts.push(0);
    pts.push(n*d1+ d2*8);pts.push(height/3);
    pts.push(n*d1+ d2*7);pts.push(height);
}


pts.push(width);
pts.push(height);

ctx.toolDiameter =options.toolDiameter;
ctx.depth = options.depth;
ctx.depthOfCut=options.depthOfCut;
ctx.align=options.align;

ctx.beginPath();
ctx.moveTo(pts[0], pts[1]);
cardinalSpline.curve(ctx, pts, 0.6, 11,false);
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();
}
