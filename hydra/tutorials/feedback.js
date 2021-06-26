osc(9,.5,2).mult(shape(4)).out()

src(o0).scale(1.005).rotate(0.01).out() //change rotate for effects



osc(10,.5,2).mult(shape(4,0.6)).out(o1)

src(o0).scale(1.01).rotate().blend(o1,.5).out() //change rotate for effects

osc(10,.5,2).mult(shape(4,0.4)).out(o0)

src(o0).scale(1.01).rotate(()=> Math.sin(time/2)*0.1).scrollX(-.0001).blend(o1,0.1).out() //change rotate for effects



osc(9,0.1,2).mult(shape(4)).out(o1)
src(o0).modulate(voronoi(),0.01).blend(o1,0.1).out() //change 2nd val in modulate for more blend


osc(120,0.1,Math.PI/2).mult(shape(4).scale(2)).out(o1)  //FIREEEEE
src(o0).modulate(src(o0).scale(1.02),0.02).blend(o1,0.1).out()



///PART 2/////////////////////////
src(o0)
  .scale(1.01)
  .scrollX([0.003, -0.003].smooth()) //od lewego do prawego
  .blend(
    osc(10, 0.1, 2).mult(shape(4, 0.5, 1e-6)),
    0.02
  )
  .out();


  src(o0)
    .modulateHue(src(o0).scale(1.01), 1)
    .layer(
      osc(10, 0.1, 2)
        .mask(shape(4, 0.5, 1e-6))
        .color(1, 1, 1, [0, 1]),
      0.02
    )
    .out();

    src(o0)
      .modulateHue(src(o0).scale(1.01), 1).hue(0.003)
      .layer(
        osc(10, 0.1, 2).mask(
          osc(100)
            .modulate(noise(3))
            .thresh(0.95, 1e-6)
          	//.color([0,1],[0,1],[0,1],1)
        )
      )
      .out()

src(o0)
  .modulateHue(src(o0).scale(1.01), 1)
  .hue(0.003)
  .layer(
    osc(10, 0.1, 2).mask(
      osc(100)
        .modulate(noise(3))
        .thresh(0.95, 1e-6)
        .mult(
          osc(3, .5).pixelate(8).thresh(0.8, 1e-6)
        )
    )
  )
  .out();

src(o0)
  .modulateHue(src(o0).scale(1.01), 1)
  .hue(0.003)
  .layer(
    osc(10, 0.1, 2).mask(
      shape(4, 0.6, 1e-6).modulateScale(
        osc(12, 0.3)
          .thresh(0.2, 0.2)
          .pixelate(18)
          .color(0, 1),
        -0.999,
        1
      )
    )
  )
  .out();
