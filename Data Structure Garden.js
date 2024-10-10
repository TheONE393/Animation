let flowers = [];

function setup() {
    createCanvas(800,600);
    frameRate(50);
    flowerPower();
}

function draw() {
    background("lightgreen");
    // text(Flower.emoji, Flower.x, Flower.y);

    updateanddrawflowers();
    
}
function mousePressed() {
    let flower = createFlower();
    flower.x=mouseX;
    flower.y=mouseY;
    flowers.push(flower);
}

function createFlower() {
    let flower = {
        x:random(0,800),
        y:random(0,600),
        size:random(20,50),
        color:color(random(0,255),random(0,255),random(0,255)),
        lifespan:random(255,300),
    };
    return flower;
}
function drawFlower(flower) {
    //body
    noStroke();
    //Petals
    circle(flower.x+flower.size/2, flower.y, flower.size);
    circle(flower.x-flower.size/2, flower.y, flower.size);
    circle(flower.x, flower.y+flower.size/2, flower.size);
    circle(flower.x, flower.y-flower.size/2, flower.size);
    //Centre
    fill(flower.color);
    circle(flower.x,flower.y,flower.size)
}

function flowerPower() {
    for (let i=0; i<20; i+=1) {
        let flowerp=createFlower();
        flowers.push(flowerp);
    }
}

function updateanddrawflowers() {
    for (let flower of flowers) {
        drawFlower(flower);
        flower.size *= 0.99;
        flower.lifespan -=1;

        if (flower.lifespan<=0) {
            let i=flowers.indexOf(flower);
            flowers.splice(i,1);
        }
    }
}