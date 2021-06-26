
//#1 wavy
osc(40,0.1,1).modulate(noise(10, 1)).modulate(o0).blend(o0,0.9).out(o0)
render(o0)

//#2 cool modifier
osc(40,0.1,1).modulate(noise(10, 1)).modulate(o0).blend(o0,0.9).out(o0)
osc(10,0,1).modulate(noise(7,0),0.5).out(o1)
src(o2).modulate(src(o1).add(solid(1,0),-0.5),0.01).blend(o0,0.01).out(o2)
render(o2)


//dots and loops
shape(400,0.5).repeat(30,30).modulate(osc(60,0.1).modulateScale(osc(1,0.4))
  .kaleid(10),0.02).out(o0)
render(o0)

//glitchy
src(o0).modulateRotate(noise(2,0),0.03).hue(0.03).layer(shape(2,0.125).luma().color(0,0,1)).out(o0)
render(o0)

//wavy
osc(20,0.1,2).modulate(voronoi(3).modulate(osc(20)),1).out()

//modulateee
osc(20,0.1,2).rotate(1).modulate(gradient().repeat(10,10).mult(shape(999,0.4,0.4)),-1/10).out()

//wonsz rzeczny
shape(2).modulateScale(osc(2,3).pixelate(10).brightness(-.5).color(0,1),2,1).out()

//vortex

osc(3,0,2).modulate(noise(3).add(gradient(),-1),1)
  .modulateRotate(shape(999,0.2,0.8),3,-1.5)
  .out()


  osc(3,0.5,2).modulate(noise(3).add(gradient(),-1),1)
    .modulateRotate(shape(999,0.2,0.7).mult(osc(1,3).brightness(-0.5).pixelate(1)),6,10)
    .out()

// postcards
new Array(10).fill().reduce((a,b)=>a.colorama(0.01),
                      gradient(0.1)).out()

//lavalamp
osc(3, 0, 2)
  .layer(solid(1, 1, 1).mask(noise(3).thresh(0.1,1e-6)))
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.2,1e-6)))
  .out();


//topografia
new Array(8).fill()
.reduce((a,b,i)=>a.layer(osc(6, 0, 2).mask(noise(5).thresh(i/20+.1,0.01)).scroll(i/100,i/50)),osc(3,0,2)).scale(1.2).out()



osc(10,.5,2).mult(shape(4,0.6)).out(o1)
src(o0).scale(1.01).rotate().blend(o1,.5).out(o0) //change rotate for effects
