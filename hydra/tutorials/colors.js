//gradient(speed of change)
gradient(1).out(o0)

//oscilator, range from 0 to Math.PI/2
osc(30,0.05,Math.PI/2).out(o0)

//hue(hue) shift the hue in HSV (hue, saturation, value) color space, preserve saturation and value
osc(30,0.1,Math.PI/2).hue(0.5).out(o0)
render(o0)

src(o0).modulateRotate(noise(2,0),0.03).hue(0.03).layer(shape(2,0.125).luma().color(0,0,1)).out(o0)
render(o1)

//colorama, shift all HSV values unpredictable
osc(30,0.1,1).colorama(({time})=>Math.sin(time/4)/4+1).out(o0)
render(o0)

colorama jest lżejsza ustawimy wartość na ujemną np
osc(30,0.1,1).colorama(-0.1).out(o0)

//LUMA, like thresh, but return with transparency
osc(30,0.1,1).luma(0.5,0.01).out(o0)
osc(200,0.1,1).rotate(1).layer(osc(30,0.1,1).luma(0.5,0.01)).out(o0)

f=()=>osc(30,0.1,1)
osc(200,0,1).rotate(1).layer(f().saturate(0).luma(0.2,0.2).color(0,0,0,1)).layer(f().luma(0.5,0.01)).out(o0)

//MAPPING INTENSITY TO PALETTE

noise(3,0).out(o0)
src(o0).add(gradient(),-1).out(o1)
osc(Math.PI*2,0.1,2).out(o2)
src(o2).modulate(src(o0).add(gradient(),-1),1).out(o3)
render()

osc(Math.PI*2,0.1,2).modulate(noise(3,0).add(gradient(),-1),1).out(o0)

gradient().modulate(noise(3,0.1).add(gradient(),-1),1).out(o0)
render(o0)


osc(60,0.1,0).color(1,0,0)
    .add(osc(62,0.12,0).color(0,1,0))
    .add(osc(64,0.13,0).color(0,0,1).mult(shape(4,0.7))).out()


osc(8,0.1,1).colorama(-.3).out()

gradient(.1).colorama(.01).colorama(.01).colorama(.01).colorama(.01).colorama(.01)
.colorama(.01).colorama(.01).colorama(.01).colorama(.01).colorama(.01).colorama(.01)
.colorama(.01).colorama(.01).colorama(.01).colorama(.01).colorama(.01).colorama(.01)
.diff(shape(4,0.5).repeat(10,10)).out()


new Array(10).fill().reduce((a,b)=>a.colorama(0.01),
                      gradient().out()

osc(4,0,2).modulate(voronoi().add(gradient(),-1),1).out()
