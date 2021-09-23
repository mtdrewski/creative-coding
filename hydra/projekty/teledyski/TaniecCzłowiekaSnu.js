osc(40, 0.1, 0)
  .color(()=>(Math.sin(time))/2+1, 0, 0)
  .layer(
    shape(4)
      .scale(1, 4, 1.2)
      .scrollY(-0.318)
      .luma()
      .mult(
        osc(160, 0.01, 0)
          .thresh()
          .rotate(Math.PI / 2)
          .kaleid(4)
          .scrollY(0.2)
          .scale(3.6)
          .repeat(3, 2)
      )
  )
  .out();

//osc(10,0,1).scrollX(1,1).out()
