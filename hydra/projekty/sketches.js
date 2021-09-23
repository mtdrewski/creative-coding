//#1 glitch
osc(18, 0.4, 0)
.color(2, 0.1, 2)
.mult(osc(20, 0.01, 0))
.repeat(2, 20).rotate(0.6).modulate(o0)
.scale(1, () => ((mouse.y-250)/50)).diff(o1).out(o1)
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
speed = 2 ///COOOO, jak to działa???
