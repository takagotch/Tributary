var svg = d3.select("svg")

tributary.duration = 2000;
tributary.delay = 80;

svg.append("rect")
  .attr({
    x: tributary.anim(100, 400),
    y: tributary.anim(100, 400),
    width: tributary.anim(100, 200),
    height: tributary.anim(100, 200, {ease: d3.ease("bounce")}),
    rx: 5,
    ry: 5
  })
  .style({
    fill: tributary.anim("#F8025B", "#38F514", {interpolate: d3.interpolateHsl}),
    stroke: "#000"
  })

