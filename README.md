The goal of this assignment was to 
``` build a simple game in stages. The eventual goal of the game is to catch falling items ```
so I chose to have a flower catching falling raindrops.

Q1 was to create a sprite that moves across the bottom of the screen. I made a flower that moves across the screen at y-coordinate 340 with movement along the x-coordinate being controlled by the user's mouse:
```
drawFlower(mouseX, 340);
```
Link: https://editor.p5js.org/alexis.krull/sketches/arl47VQ9H

Q2 was to add code so that the sprite from Q1 will change whenever the user clicks the mouse button. I chose to make the flower petals swell (with water/happiness) when the user clicks:
```
if (mouseIsPressed){
  ellipse(0, 12, 15);
} else {
  ellipse(0, 0, 15);
}
```
Link: https://editor.p5js.org/alexis.krull/sketches/WA_l0cE9v

Q3 was to add an item to the Q2 code that drops from the top of the screen at a random x-position when the user presses the play button. I chose to make a raindrop.
```
dropRain(rainX, rainY);
  rainY = rainY + speed;
```
where the x-coordinate is random, the y-coordinate always starts at 0 (the top of the screen), and the speed of the raindrop is randomized from 1-5.
```
rainX = random(400);
rainY = 0;
speed = random(1, 5);
```
Link: https://editor.p5js.org/alexis.krull/sketches/HzDXQ7vGI

Q4 was to add onto Q3 and make the raindrop fall when the user clicks. I did this by adding a "rainFalling" boolean variable that activates when the user clicks:
```
function mousePressed(){
  rainFalling = true;
}
```
then making the previous raindrop falling function from Q3 only activate when the user clicks the mouse AND the raindrop has reached the ground at x=360:
```
if (rainY >= 360){
    rainX = random(400);
    rainY = 0;
    speed = random(1, 5);
    rainFalling = false;
}
```
Link: https://editor.p5js.org/alexis.krull/sketches/nvR_lcRIT

Q5 was to edit the previous Q4 code to make the flower sprite only change when the raindrop overlaps it instead of when the user clicks:
```
  if (dist(rainX, rainY, mouseX, 340) < collisionDist) {
    caught = true;
  } else {
    caught = false;
  }
```
I also added in the advanced option to track the falling items and stop the game if the user misses too many in a row. I chose to make the maxiumum 5 and made it so that a black screen appeared and the screen goes black, while printing a failure message in the console:
```
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
```
Link: https://editor.p5js.org/alexis.krull/sketches/saUMJphFI
