let startline = 50;
let finishline = 700;

let spacing = 20;
let segmentSize = 50;
//eyes
let eyeSize = 14;
//numbers of cp
let numCaterPillars = 5;
//array to record x-coordinate
let caterpillarEnds = [];
let isRacing = false;

function setup() {
    createCanvas(800,500);
    frameRate(5);

    for (let i=0; i<numCaterPillars; i+=1) {
        caterpillarEnds.push(startline);
    }
}

function draw() {
    background("grey");
//Draw the lines
    fill('red');
    linep(startline,0,5);

    fill('green');
    linep(finishline,0,20);
//Display start message
    if (isRacing===true) {
        moveCaterPillars();
    }
    else {
        writeStart();
    }
//Start the race    
    drawcaterpillars();
//Show Winner
    checkWinner();
}

//functions
function checkWinner() {
    for (let i=0; i<caterpillarEnds.length; i+=1) {
        if (caterpillarEnds[i] >= finishline) {
            textAlign(CENTER);
            textSize(20);
            fill('blue');
            stroke(0)
            text(`Caterpillar ${i+1} wins !`, width/2, height/2);
            noLoop();
        }
    }
}

function writeStart() {
    textAlign(CENTER);
    textSize(20);
    fill('blue');
    stroke(0)
    text("🏁 !! Click to start !!", width/2,height/2);
}

function mousePressed() {
    isRacing = true;
}

function moveCaterPillars() {
    for (let i=0; i<numCaterPillars; i+=1) {
        let move = random(5,30);
        caterpillarEnds[i] +=move;
    }
}

function drawcaterpillars() {
    for (let i = 0; i<numCaterPillars; i+=1) {
        let padding = height/numCaterPillars;
        let y = (i+0.5)*padding;
        let crawl = round(random(4,6));
        drawcaterpillar(caterpillarEnds[i], y, crawl);   
    }
}

function drawcaterpillar(x,y,segments) {

    for (let i = 0; i < segments; i += 1) {
        caterpillar(x, y, segmentSize);
        x += spacing;
    }
    eyes(x-eyeSize, y-eyeSize, eyeSize);
    eyes(x-eyeSize, y+eyeSize, eyeSize);
}

function caterpillar(x,y,radius) {
    fill('purple');
    stroke('black');
    strokeWeight(3);
    circle(x,y,radius);
}

function eyes(x,y,eyeSize) {
    fill('black');
    circle(x,y,eyeSize);
}

function linep(x,y,size){
    // fill("green");
    stroke(0);
    strokeWeight(1);
    rect(x,y,size,height);
}
