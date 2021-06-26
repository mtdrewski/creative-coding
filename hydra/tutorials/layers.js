//add luma to make part of layer transparent
osc(60,0.1,1).layer(osc(60,0.1,0).luma().rotate(.2)).out()

//dziwna funkcja r(), zmieniajaca czarny na zero transparency
osc(60,0.1,1).layer(osc(60,0.1,0).r().rotate(.2)).out()


osc(60, 0.1, 1)
  .layer(
    solid(1, 1, 1).mask(osc(60, 0.1, 0).thresh().rotate(0.2)
    )
  )
  .out()

  osc(60, 0.1, 1)
    .layer(
      gradient(0.1).mask(shape(4, 0.2, 0.4).scale(2.3))
    )
    .out();

mask albo:
mult(____.lua())

osc(20, 0.1, 1)
    .layer(
      gradient().mask(shape(4, 0.5, 0.1))
    )
    .out();

    osc(60, 0.1, 1)
      .layer(gradient().mask(shape(4, 0.6, 0.1)))
      .layer(osc(60, 0.1, 2).mult(shape(3).luma()).rotate(0,1))
      .out();

      osc(3, 0, 2)
        .layer(osc(6, 0.1, 2).mask(noise(3).thresh(0.2,1e-6)))
        .out()

osc(3, 0, 2)
    .layer(solid(0,0, 0).mask(noise(3).thresh(0.1,0.1)).color(1,1,1,0.6))
    .layer(osc(6, 0, 2).mask(noise(3).thresh(0.2,1e-6)))
    .out();

.color(1,1,1,0.6)) -> affect the alpha of the image


//3D!11!
osc(3, 0, 2)
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.2,1e-6)))
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.3,1e-6)).scrollX(0.03))
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.35,1e-6)).scrollX(0.06))
  .layer(osc(6, 0, 2).mask(noise(3).thresh(0.5,1e-6)).scrollX(0.09))
	.scale(1.2)
  .out();

//topografia
new Array(8).fill().reduce(
(a,b,i)=>a.layer(osc(6, 0, 2).mask(noise(5).thresh(i/20+.1,0.01)).scroll(i/100,i/50)),osc(3,0,2)).scale(1.2).out()
