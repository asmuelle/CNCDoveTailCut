var Gcanvas = require('gcanvas');
var cardinalSpline = require("cardinal-spline-js/curve_func");
var driver = new Gcanvas.GcodeDriver({
  write: function(cmd) {
    console.log(cmd);
  }
});

var ctx = new Gcanvas(driver);

var pts=	[   0, 60,
			     15, 60,
					 10, 40,
					 25, 30,
					 40, 40,
					 35, 60,

					65, 60,
		 			60, 40,
					75, 30,
					90, 40,
					85, 60,

					115, 60,
					110, 40,
					125, 30,
					140, 40,
					135, 60,

          165, 60,
          160, 40,
          175, 30,
          190, 40,
          185, 60,

					 			 200, 60];
ctx.toolDiameter =5;
ctx.depth = 5;
ctx.depthOfCut=1;
ctx.beginPath();				 
ctx.moveTo(pts[0], pts[1]);
cardinalSpline.curve(ctx, pts, 0.6, 11,false);
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();
