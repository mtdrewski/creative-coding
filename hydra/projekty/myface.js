s0.initCam();
src(s0).out();

src(s0)
  .color(1.04, 0.1, -0.3)
  .modulate(
    new Array(10)
      .fill()
      .reduce(
        (a, b) => a.colorama(0.02),
        gradient(0.1)
      )
  )
  .out(o0);
