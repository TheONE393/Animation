let myimage;
let ironman;
function preload() {
    myimage = loadImage("Images/IMG_20240106_125615.jpg")
}

function setup() {
    createCanvas(myimage.width, myimage.height);
    // createGraphics(myimage.width, myimage.height);
    ironman = createGraphics(myimage.width, myimage.height);
    imageMode(CENTER);
}

function draw() {
    // background("white");
    setGradient(0, 0, width, height, color(255, 255, 255), color(150, 150, 255), 'Y');
    image(ironman, width/2, height/2);
    // if (mouseIsPressed) {
    //     for (let i = 0; i < 10000; i++) {
    //         paintPicture(myimage);
    //     }
    // }
    for (let i = 0; i < 10000; i++) {
        paintPicture(myimage);
    }
}

function paintPicture(img) {
    let sourceX = random(0,img.width);
    let sourceY = random(0, img.height);
    let c = img.get(sourceX, sourceY);
    ironman.stroke(c[0],c[1],c[2],c[3]);
    ironman.strokeWeight(random(5,10));
    ironman.point(sourceX,sourceY);
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis === 'Y') {  // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
}