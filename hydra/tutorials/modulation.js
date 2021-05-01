//modulate(source, amount), tworzy na podstawie odpowiedniego mnożenia macierzy wynik
osc(40,0.1,2).out(o0)
noise(3.0).out()
osc(40,0.1,1).modulate(noise(3,0),({time})=>Math.sin(time/4)/2+1).out()

//luma(threshold, tolerance) cuts off pixels like in thresh(),
//ale bez pikseli mozna odpowiednio modulować
osc().luma().out()
osc(40,0.1,1).modulate(noise(3,0).luma(0.5,0.5)).out()


//feedback
osc(40,0.1,1).modulate(noise(10, 1)).modulate(o0).blend(o0,0.9).out(o0)

//x and y
osc(10,0,1).modulate(noise(7,0),0.5).out(o1)
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.01).blend(o0,0.01).out(o2)
render(o2)

osc(10,0,1).modulate(noise(2,0),0.5).luma(0.7).out(o1)
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.01).blend(o0,0.01).out(o2)
render(o2)

osc(10,0,1).modulate(noise(2,0),0.5).posterize(4).out(o1)
src(o2).modulate(src(o1).add(solid(1,1),-0.5),0.01).blend(o0,0.01).out(o2)
render(o2)

//MODULATEHUE

osc(10,0,1).modulate(noise(2,0),0.5).hue(-0.1).out(o1)
src(o2).modulateHue(o1,0).blend(o0,0.01).out(o2)
src(o2).luma(0.3,0.3).mult(o1).out(o3)
render(o3)

//modulatescale

osc(60,0.1,1).modulateScale(osc(14,0.2)).out(o0)
osc(60,0.05).modulateScale(osc(8,0.1)).kaleid(6).out(o0)

shape(400,0.5).repeat(40,40).modulate(osc(60,0.1).modulateScale(osc(1,0.4))
  .kaleid(10),0.02).out(o0)
render(o0)

osc(40,0,2).out(o0)
noise(3,0.1).pixelate(16,16).out(o1)
src(o0).modulatePixelate(noise(3,0.1).pixelate(16,16),1024,16).out(o2)
render(o2)

//////////////////////////////////video tutorial
osc(20,0.1,2).modulate(voronoi(3,0).modulate(osc(20)),1).out()

osc(20,0.1,2).modulate(gradient(),-1).out()

osc(20,0.1,2).rotate(1).pixelate(10,10).modulate(gradient().repeat(10,11),-1/10).out()


osc(20,0.1,2).rotate(1).
layer(osc(20,0.1,2).rotate(1).modulate(gradient().repeat(10,10).mult(shape(999,1)),-1/10)).out()

osc(20,0.1,2).rotate(1).modulate(gradient().repeat(10,10).mult(shape(999,0.4,0.4)),-1/10).out()


//
shape(2).modulateScale(osc(20,.1).pixelate(16).brightness(-.5).color(0,1),2,1).out()

shape(4).scrollY(()=>Math.sin(time*3)*.2).out()

osc(1,3).pixelate(1).out()


////////////////////////
noise(3).modulatePixelate(noise(3).pixelate(8,8),128,8).out()

noise(3).pixelate(8,8).out()

osc(3,0,2).modulate(noise(3).add(gradient(),-1),1)
  .modulateRotate(osc(30).kaleid(999),6,0)
  .out()

osc(30).kaleid(999).out()


osc(3,0.1,2).modulate(noise(3).add(gradient(),-1),1)
  .modulateRotate(shape(999,0.2,0.7).mult(osc(1,3).brightness(-0.5).pixelate(1)),6,10)
  .out()
