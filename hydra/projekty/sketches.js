//#1 glitch
osc(18, 0.4, 0)
.color(2, 0.1, 2)
.mult(osc(20, 0.01, 0))
.repeat(2, 20).rotate(0.6).modulate(o0)
.scale(1, () => ((mouse.y-250)/50)).diff(o1).out(o0)
osc(30, 0.2, 0).color(2, 0.7, 0.1).mult(osc(mouse.x/20)).modulateRotate(o0, 0.1)
.rotate(0.2).out(o1)

//#2 lavalamp
osc(3, 0, 2)
  .layer(solid(1, 1, 1).mask(noise(3).thresh(0.1,1e-3)))
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.2,1e-3)))
  .out();

//#3 postcards
new Array(10).fill().reduce((a,b)=>a.colorama(0.1  ), //0.02
                      gradient(0.1)).out()

//#4 vortex
osc(3,0.5,2).modulate(noise(3).add(gradient(),-1),1)
  .modulateRotate(shape(999,0.3,0.7).mult(osc(1,3).brightness(-0.5).pixelate(1)),6,10)
  .out()

//#5 dots and loops
shape(400,0.5)
  .repeat(30,30).modulate(osc(60,0.05,2).modulateScale(osc(1,0.4))
  .kaleid(10),0.02).out();

shape(400,0.5).color(1,0,0).out()


//#6 dunes
osc(40,0.1,1).modulate(noise(10, 1)).modulate(o0).blend(o0,0.9).out(o0)
render(o0)

osc(10,0,1).modulate(noise(7,0),0.5).out(o1)
src(o2).modulate(src(o1).add(solid(1,0),-0.5),0.01).blend(o0,0.01).out(o2)
render(o2) ///ummm

//#7 glitch river
voronoi(10,1)
.mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(400))
.modulate(o0,0.5)
.add(o0,0.8)
.scrollY(-0.01)
.scale(0.99)
.modulate(voronoi(8,1),0.008)
.luma(0.3)
.out()
speed = 0.1 ///COOOO, jak to działa???


//#8 butterflies
osc(10,0.2,5)
  .modulateScale(osc(40,0,1).kaleid(16))
  .repeat(2,4)
  .modulate(o0,0.05)
  .modulateKaleid(shape(16,0.1,1))
  .out(o0)

//#9 glitch it
src(o0)
 .saturate(1.01)
 .scale(.999)
 .color(1.01,1.01,1.01)
 .hue(.01)
 .modulateHue(src(o1).hue(.2).posterize(-1).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)
noise(1, .2)
  .rotate(2,.5)
  .layer(src(o0)
  .scrollX(.2))
  .out(o1)
render(o0)

//#10 sierpinski
shape(3).add(osc(1,0.4,2).color(1,0,1), 1)
	.add(o1, () => (Math.sin(time/4) * 0.7 + 0.1))
	.repeat(3)
  	.scale(()=>Math.sin(time / 16)).rotate(0, -0.1)
	.out(o1)
src(o1)
  .rotate(0,0.1)
  .out()

//#10.5 Ż¥ÐÐ¥Ń
src(s0).add(osc(1,0.4,2).color(1,0,1), 1)
    .add(o1, () => (Math.sin(time/4) * 0.7 + 0.1))
    .repeat(3)
    .scale(()=>Math.sin(time / 16)).rotate(0, -0.1)
    .out(o1)
src(o1)
  .rotate(0,0.1)
  .out()
s0.initImage("https://i1.sndcdn.com/avatars-000740486770-wvez50-t500x500.jpg")

//#11 port
osc(5, 0.9, 0.001)
    .kaleid([3,4,5,7,8,9,10].fast(0.1))
    .color(0.5, 0.3)
    .colorama(0.4)
    .rotate(0.009,()=>Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 0.003)
    .modulate(o0, 0.9)
    .scale(0.9).out()


//#12 pew pew pew
osc(10, 0.9, 300)
.color(0.9, 0.7, 0.8)
.diff(
  osc(45, 0.3, 100)
  .color(0.9, 0.9, 0.9)
  .rotate(0.18)
  .pixelate(12)
  .kaleid()
)
.scrollX(10)
.colorama()
.luma()
.repeatX(4)
.repeatY(4)
.modulate(
  osc(1, -0.9, 300)
)
.scale(2)
.out()

//#13
