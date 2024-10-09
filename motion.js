//custom variables for cloud
let cloudoneX = 50;
let lineXone=0;
let lineYone=0;
function setup() {
    createCanvas(750,600);
}

function draw(){
    background('skyblue');
    frameRate(300);

//Asteroids
    stroke('yellow');
    strokeWeight(5);
    line(lineXone, lineYone, lineXone+30, lineYone-30);
//Random location of asteroids
    lineXone=random(0,width);
    lineYone=random(0,height/2);

    moon();
    mountains();
    grass();
    clouds();
    tree(80,528,10);
    tree(622,504,9);

//Adding the cursor locator
    fill('red')
    textSize(10);
    text(`${mouseX}, ${mouseY}`,10,10); //write this line at last of draw function.
}

//Adding The moon
function moon() {
    fill('white');
    strokeWeight(1);
    textSize(100);
    text("🌙", 630,80);
}
//Adding the mountains
function mountains() {
    fill('grey');
    stroke(0);
    triangle(-80,500,200,100,450,500);
    triangle(290,500,500,160,850,500);
}
//Adding greenery
function grass() {
    fill('green');
    stroke(0);
    rect(0,500,750,100);
}
//Adding clouds
function clouds(){
    fill('white');
    ellipse(cloudoneX,50,100,60);
    ellipse(cloudoneX-40,95,60,35);
    ellipse(cloudoneX+30,120,80,20);

//Motion of the clouds
    cloudoneX= frameCount % width
}
//Adding tree 1
function tree(x,y,size){

    fill("rgb(118,80,72)");
    stroke(0);
    rect(x-size,y,size*2,size*6);
    fill('green');
    stroke(0);
    triangle(x-size*3,y,x,(y-size*8)-(frameCount%y-size*8),x+size*3,y);
}