
let silder;

function preload(){
}

function setup() {
    createCanvas(1500, 1000, WEBGL);
    graphics = createGraphics(200,200);
    graphics.background(151);

    love = createGraphics(200,200);
    love.fill(255);
    love.textAlign(CENTER);
    love.textSize(32);
    love.text('change your\n mindset',100,100);
}


function draw() { //wykonuje sie co sekunde

    background(0);
 
    // graphics.fill(255,0,255);
    // graphics.ellipse(mouseX/5,mouseY/5,20);
    ambientLight(100);
    directionalLight(255,255,255,0,0,-1);

    let angle = frameCount * 0.01;
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);
    // //texture(graphics);
    // box(300);
    
    texture(love);
    plane(1000,1000);

}