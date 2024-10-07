let sunHeight=629;
let redVal=0;
let greenVal=0;
let blueVal=0;
function setup() {
    createCanvas(750,600);
}
function draw() {
    background(redVal,greenVal,blueVal);
    frameRate(205);
    
    fill('yellow');
    stroke('orange');
    strokeWeight(15);
    circle(384,sunHeight,130)

//mountains
    stroke(0);
    strokeWeight(1);
    fill(110, 50, 18);
    triangle(400, 600, 620, 453, 800, 600);
    fill(110,95,20);
    triangle(200,600,620,453,450,600);  

    fill(150, 75, 0);
    triangle(-100, 600, 150, 400, 400, 600);
    fill(100, 50, 12);
    triangle(-100, 600, 150, 400, 0, 600); 

    fill(150, 100, 0);
    triangle(200, 600, 450, 450, 800, 600);
    fill(120, 80, 50);
    triangle(200, 600, 450, 450, 300, 600);

// Moving Sun
    if (sunHeight>=20) {
        sunHeight-=2;
        if (sunHeight<600) {
            greenVal+=1;
            redVal+=3;
            blueVal+=0;
        }
    }
    if (mouseIsPressed == true && sunHeight === 18) {
          background(0);
        }
// //Adding Sun
//     sunHeight=527-frameCount%527;
//     if(sunHeight<horizon) {
//         background("lightblue");
//     }
//     if(sunHeight<260) {
//         background("white");
//     }
//     fill('yellow');
//     circle(400,527-frameCount%527,130);
// //Adding Grass
//     fill('green');
//     rect(0,387,750,213)
//Pointer locator
     fill('white');
     stroke(0);
     text(`${mouseX}, ${mouseY}`,10,10);
}
