
let canv = document.querySelector('.container');
let canvasWidth = window.innerWidth;
let canvasHight = window.innerHeight;

let pg; // grafics buffer


function setup() {
  // add item to div container
  const canvasCreate = createCanvas(canvasWidth, canvasHight);
  canvasCreate.parent(canv);
  background(0);
  // viereckig
  pg = createGraphics(canvasWidth, canvasHight, P2D);
  //frameRate(3);

}

function draw(){
  pg.background(0);
  pg.textFont('Helvetica');
  pg.textSize(canvasHight-100);
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.fill(255);
  pg.text("a", 0, 0);
  pg.pop();

  image(pg, 0, 0);

  var tilesX = 8;
  var tilesY = 8;

  var tileW = int(width/tilesX);
  var tileH = int(height/tilesY);

  for (var y = 0; y < tilesY; y++) {
    for (var x = 0; x < tilesX; x++) {

      // WARP
      var wave = int( sin( frameCount * 0.1 + (x*y) )*30 );

      // SOURCE
      var sx = x*tileW;
      var sy = y*tileH;
      var sw = tileW ;
      var sh = tileH;


      // DESTINATION
      var dx = x*tileW+wave;
      var dy = y*tileH;
      var dw = tileW;
      var dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

