let detailX
let detailY

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

    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(-dx,-dy,0);
    v.normalize();
    background(175);

    //pointLight(0,0,255,mouseX-width/2,mouseY-height/2,0);
    ambientLight(0,0,255);
    directionalLight(255, 255, 0,v);
    // pointLight(255,0,0,-500,0,0);
    //    fill(250,50,0);
    //    normalMaterial();
    //    ambientLight(255);
    //ambientMaterial(255,255,255);  
    specularMaterial(255);
    translate(-width / 3, -height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(100, 100);

    resetWEBGL();
    translate(0, -height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100, 100);

    resetWEBGL();
    translate(width / 3, -height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 300, detailX.value(), detailY.value());

    resetWEBGL();
    translate(-width / 3, height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(100, 300, detailX.value(), detailY.value());

    resetWEBGL();
    translate(0, height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(100, detailX.value(), detailY.value());

    resetWEBGL();
    translate(width / 6, height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ellipsoid(100, 200, 150, detailX.value(), detailY.value());

    resetWEBGL();
    translate(width / 3, height / 5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 30, detailX.value(), detailY.value());


    /*
    
    rotate(angle,[1,1,1]);
    box(10,100,50);
    angle+=0.07;
    */
}


function resetWEBGL() { //TODO: sprawdzic czy to jest bug i jak definiowana jest glebokosc w webgl
    resetMatrix();
    translate(0, 0, -height);
}