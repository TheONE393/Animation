let flower1;
let flower2;
let flower3;
let water;

let garden;

let flower1X = 100;
let flower2X = 300;
let flower3X = 500;
let flowerY = 300;
let flowerSize = 20;


function preload() {
    flower1 = loadImage("Images/flower-1.png");
    flower2 = loadImage("Images/flower-2.png");
    flower3 = loadImage("Images/flower-3.png");
    water = loadImage("Images/water.gif");
}

function setup() {
    createCanvas(800,600);
    createGraphics(800,600);
    garden = createGraphics(800,600); //Same as canvas
    imageMode(CENTER);
    // flower1.resize(100,100);
    water.pause();
    water.delay(5);
    frameRate(300);
}

function draw(){
    background("white");
    // drawstems();
    wateringcan();
    image(garden, width/2, height/2);
    if (mouseIsPressed) {
        paintFlower(flower1, flower1X, flowerY);
        paintFlower(flower2, flower2X, flowerY);
        paintFlower(flower3, flower3X, flowerY);
    }
    // if (mouseIsPressed) {
    //     if (flowerY > 150) {
    //         flowerY -= 1;
    //     }
    //     if (flowerSize < 200) {
    //         flowerSize +=0.5;
    //     }
    // }
}
function paintFlower(img, x, y) {
    let sourceX = random(0,img.width);
    let sourceY = random(0, img.height);
    let c = img.get(sourceX, sourceY);
    garden.stroke(c);
    garden.strokeWeight(random(5,10));
    garden.point(sourceX + x,sourceY + y);
}

function mousePressed() {
    water.play();
}

function mouseReleased() {
    water.reset();
    water.pause();
}
// function drawstems() {
//     stroke("brown");
//     strokeWeight(3);
//     line(flower1X,600,flower1X,flowerY);
//     line(flower2X,600,flower2X,flowerY);
//     line(flower3X,600,flower3X,flowerY);
// }

// function drawflowers() {
//     image(flower1, flower1X, flowerY, flowerSize, flowerSize);
//     image(flower2, flower2X, flowerY, flowerSize, flowerSize);
//     image(flower3, flower3X, flowerY, flowerSize, flowerSize);
// }

function wateringcan() {
    image(water, mouseX, mouseY);
}