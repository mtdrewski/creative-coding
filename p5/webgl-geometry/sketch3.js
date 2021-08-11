let detailX;
let detailY;

function setup() {
    createCanvas(1500, 1000, WEBGL);
}


function draw() { //wykonuje sie co sekunde

    background(151);
    // let camX= map(mouseX,0,width,-500,500);
    // let camY= map(mouseY,0,height,-500,500);
    // camera(camX,camY,(height/2)/(tan(PI/6)),camX,camY,0,0,1,0);

    // let shakeScale = 15;
    // let camX = random(-shakeScale, shakeScale);
    // let camY = random(-shakeScale, shakeScale);
    // let camZ = random(-shakeScale, shakeScale);
    // camera(camX, camY, camZ + (height / 2) / (tan(PI / 6)), 0, 0, 0, 0, 1, 0);

    // let fov =map(mouseX,0,width,0, PI);
    // let EyeZ = ((height / 2) / tan(PI / 6));
    // perspective(fov, width / height, EyeZ / 10, EyeZ * 10);

    ortho();
    pointLight(255,255,255,0,-200,1000);

    for (let x = -400; x < 400; x += 100) {
        push();
        translate(x,0,x -200);
        let angle = frameCount * 0.01;
        rotateX(angle);
        rotateY(angle * 0.3);
        rotateZ(angle * 1.2);
        noStroke();
        ambientMaterial(255);
        box(100);
        pop();
    }
    

    translate(0, 400, 0);
    rotateX(HALF_PI);
    fill(51);
    plane(1500, 1500);
}