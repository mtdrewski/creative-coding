/*brightness
.brightness( amount )

amount :: float (default 0.4)
Ustaw jasność wizualizacji*/

osc(20,0,1)
    .brightness( ({time}) => Math.sin(time/2)/4-0.2) //wow, paradygmaty funkcyjne
    .out()

/*
    contrast
    .contrast( amount )

    amount :: float (default 1.6)
    Larger amount value makes higher contrast.
    Ustaw jak duży jest kontrast między wartościami
*/
osc(20).contrast(({time}) => Math.sin(time) * 5).out()


osc(20,0.1,0.2)
    .contrast(({time}) => Math.sin(time) * 4)
//    .brightness(({time}) => Math.sin(time/2)/4-0.2)
    .out(o0)


/*
color vec4
.color( r, g, b )

r :: float
g :: float
b :: float
Colorize texture.
*/
// 20Hz oscillator source
// color sequence of Red, Green, Blue, White, Black
// output to buffer o0


///TEXTURES

//osc(freq,sync,offset
osc(20,0.3,1).color([0.3,0.2],[0.5,0.8],[0.6,0.5]).out()


//thresh(scale)
osc(40,0.1,2).thresh(({time})=>Math.sin(time)/2+0.5).out()

//posterize(bins,gamma(scale))
osc(40,0.1,2).posterize(4,({time})=>Math.sin(time)/4+0.75).out()

//pixelate(pixelX,pixelY)
osc(40,-0.1,2).posterize(4,({time})=>Math.sin(time)/4+0.75).rotate(60,0).pixelate(100,100).out()

//kaleid(num of edges)
osc(200, 0.1).kaleid(6).out(o0)

osc(40,0.05).thresh().kaleid(({time})=>Math.sin(time/2)+4).out(o0)

//zeskaluj odpowiednio zgodnie z ekranem
osc().scale(1,1,()=>window.innerWidth/window.innerHeight).out()


//noise(scale,speed), based on perlin noise
noise(15, 2).out(o0)

//voronoi(scale,speed,light)
voronoi(10,3,({time})=>Math.sin(time)).out()

//shape(sides,radius,smoothing)
shape(6,0.5,0.4).out()

//add, po prostu dodaj...
n = 5
a = () => shape(15,0.4).repeat(n,n)
a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).out()


n = 8/Math.sqrt(2)
a = () => shape(400,0.75).repeat(n,n)
a().rotate(Math.PI/4).out()

//skomplikowane..., Taki fancy podzial tego jak działa nam ekran
n = 100000;
func = () => osc(30,0.1,1).modulate(noise(4,0.1)) //modulate wytlumacza w nastepnym rozdziale
pix = () => shape(4,0.3).scale(1,1,3).repeat(n,n)
pix().mult(func().color(1,0,0).pixelate(n,n)).out(o1)
pix().mult(func().color(0,1,0).pixelate(n,n)).scrollX(1/n/3).out(o2)
pix().mult(func().color(0,0,1).pixelate(n,n)).scrollX(2/n/3).out(o3)
solid().add(src(o1),1).add(src(o2),1).add(src(o3),1).out(o0)


//self referential
func= ()=> shape(4,0.8)
shape(4,0.8).out(o0)
shape(4,0.8).diff(src(o0).scale(0.97)).out(o0)

voronoi(10,1,4).out(o0)
voronoi(10,1).diff(src(o0).scale(0.9)).out(o0)

voronoi(10,0,0).thresh(0.5,0.01).diff(src(o0).scale(0.9)).out(o0)


solid().out(o0)
voronoi(10,0,0).thresh(0.5,0.01).mask(shape(4,0.8,0.01)).diff(src(o0).scale(0.97)).out(o0)


shape(4,0.9).diff(src(o0).scale(0.9).mask(shape(4,0.9,0.01)).rotate(0.06)).out(o0)

shape(4,0.7).diff(src(o0).scrollX(0.01).mask(shape(4,0.7))).out(o0)
