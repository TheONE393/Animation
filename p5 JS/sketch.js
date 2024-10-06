function setup() {
  createCanvas(650, 600);
}

function draw() {
  background('aqua');

  fill(0);
  stroke("orange");
  strokeWeight(25);
  fill(mouseX, mouseY, 0);
  circle(550,100,100);

  fill("green");
  stroke(0);
  strokeWeight(0);
  rect(0,300,650,300);

  textSize(75);
  text("🥀",240,300);
  text("🐞", 300, 450);
}
