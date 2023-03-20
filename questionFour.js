//flower catching raindrops
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rainX = random(400);
  rainY = 0;
  speed = random(1, 5);
  rainFalling = false;
}

function draw() {
  background("powderblue"); //sky
  fill("grey");//clouds
  push();
  noStroke();
  ellipse(10, 10, 100);
  ellipse(80, 20, 100);
  ellipse(160, 15, 100);
  ellipse(220, 10, 100);
  ellipse(300, 20, 100);
  ellipse(380, 10, 100);
  pop();
  fill("forestgreen"); //ground
  rect(0, 350, width, 50);

  drawFlower(mouseX, 340);
  if (rainFalling){
    dropRain(rainX, rainY);
    rainY = rainY + speed;
  }
  
  if (rainY >= 360){
    rainX = random(400);
    rainY = 0;
    speed = random(1, 5);
    rainFalling = false;
  }
  
}

function drawFlower(x, y) {
  let petalNum = 9;
  push();
  translate(x, y);

  //stem
  push();
  strokeWeight(4);
  stroke("limegreen");
  line(0, 10, 0, 30);
  pop();

  //petals
  fill("red");
  for (i = 0; i < petalNum; i++) {
    if (mouseIsPressed){
      ellipse(0, 12, 15);
    } else {
      ellipse(0, 12, 10);
    }
    rotate(360 / petalNum);
  }

  //center
  fill("yellow");
  if (mouseIsPressed){
      ellipse(0, 0, 20);
    } else {
      ellipse(0, 0, 15);
    }
  
  pop();
}

function dropRain(x, y){
  push();
  translate(x, y);
  noStroke();
  fill("blue");
  ellipse(0, 0, 10);
  triangle(-5, 0, 5, 0, 0, -15);
  pop();
}

function mousePressed(){
  rainFalling = true;
}
