//flower catching raindrops
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  speedMin = 1;
  speedMax = 10;
  rainStart(); //starting conditions of rain (see functions below)
  rainFalling = false; //start with no rain falling
  collisionDist = 30;
  caught = false; //start as no raindrop caught
  total = 0; //tally for total raindrops caught
  console.log("Don't miss more than 5 raindrops in a row or the flower will die!");
}

function draw() {
  //sky
  background("powderblue");
  //rain clouds
  fill("grey");
  push();
  noStroke();
  ellipse(10, 10, 100);
  ellipse(80, 20, 100);
  ellipse(160, 15, 100);
  ellipse(220, 10, 100);
  ellipse(300, 20, 100);
  ellipse(380, 10, 100);
  pop();
  //ground
  fill("forestgreen");
  rect(0, 350, width, 50);

  drawFlower(mouseX, 340);

  if (rainFalling) {
    //if triggered to true, drop raindrop
    dropRain(rainX, rainY);
    rainY = rainY + speed;
  }

  if (rainY >= 360) {
    //if rain has fallen past ground
    rainStart();
    rainFalling = false; //do not drop another raindrop yet
    if (!caught) {
      total = total + 1;
      console.log("Total raindrops missed: " + total); //tally total times not caught
      if (total == 5) {
        console.log("YOU LOSE. THE FLOWER IS DEAD.");
        console.log("Press the play button to restart.");
        //fill screen with black rectangle when game is over
        fill("black");
        rect(0, 0, width, height);
        noLoop();
      }
    } else if (caught) {
      total = 0; //if caught, reset total missed to 0
      console.log("Total raindrops missed: " + total);
    }
  }

  //if rain and flower are less than collision distance, consider it caught
  if (dist(rainX, rainY, mouseX, 340) < collisionDist) {
    caught = true;
  } else {
    caught = false;
  }
}

//MY FUNCTIONS
//draw flower sprite at bottom
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
    if (caught) {
      ellipse(0, 12, 15);
    } else {
      ellipse(0, 12, 10);
    }
    rotate(360 / petalNum);
  }

  //center
  fill("yellow");
  if (caught) {
    ellipse(0, 0, 20);
  } else {
    ellipse(0, 0, 15);
  }

  pop();
}

//draw raindrop
function dropRain(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("blue");
  ellipse(0, 0, 10);
  triangle(-5, 0, 5, 0, 0, -15);
  pop();
}

//if mouse button is pressed once, rain will drop
function mousePressed() {
  rainFalling = true;
}

//starting conditions of each raindrop
function rainStart() {
  rainX = random(400);
  rainY = 0;
  speed = random(speedMin, speedMax);
}
