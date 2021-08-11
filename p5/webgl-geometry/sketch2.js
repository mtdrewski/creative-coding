let detailX;
let detailY;

let socks;

function preload() {
    socks = loadImage("socks.png");
}

function setup() {
    createCanvas(1500, 1000, WEBGL);
    detailX = createSlider(3, 24, 3);
    detailX.position(10, height + 5);
    detailX.style('width', '200px');

    detailY = createSlider(3, 24, 3);
    detailY.position(300, height + 5);
    detailY.style('width', '200px');
}


function draw() { //wykonuje sie co sekunde

    background(175);

    push();
  //  ambientLight(255);
    
    texture(socks);
    translate(0, 0, 100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(200);
    pop();

    translate(0, 400, -500);
    rotateX(HALF_PI);
    texture(socks);
    //    ambientMaterial(255);
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx, dy, 0);
    v.normalize();
    directionalLight(255, 255, 255, v);
    plane(1500, 1500);
}