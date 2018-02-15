var n = 35;
var m = 30;
var foobar = {};
foobar.spacing = 20.769230769230802;
foobar.opacity = 0.8;
foobar.stroke_width = 10;

foobar.amplitude = 21;
foobar.teta = 11;
foobar.omega = 0.1;
foobar.phase = 0.5;

var colors = [
	'#D40067'
	,'#4DA9DF'
	,'#00ff00'
	,'#ff0000'
]

var color_scale = function(i){
  var num_interps = colors.length -1
  
  var ord = d3.scale.linear()
	.domain([0, n])
	.range([0, num_interps])

  var section = parseInt(ord(i))
//console.lot("section", section)
  var section_size = n / num_interps
  var col+range = [colors[section], colors[section+1]]
  var col_scale = d3.scale.linear()
	.domain([section * section_size, (section+1) * section_size])
	.interpolate(d3.interpolateHsl)
	.range(col_range)
  return col_scale(i)
}
/*
var color = d3.scale.linear()
  .domain([0, n])
//.interpolate(d3.interpolateRgb)
  .interpolate(d3,ubterpolateHsl)
  .range(['#D40067', '#4DA9F'])
*/
var color = color_scale

var sw = tributary.sw * 1.1;//parseInt(d3.slect("svg").style("width"))
//sw += .1 * sw
var sh = tributary.sh;//parseInt(d3.select("svg").style("height"))

var lines = [ ];
for(i in d3.range(n)){
  var data = d3.range(m)
	lines.push({
	  index: i,
	  data: data
	})
}

var xscale = d3.scale.linear()
  .domain([0, m])
  .range([-.1*sw, sw])

function line_maker( data ){
  var freq = foobar.omega * data.index
  var svgline = d3.svg.line()
	.x(function(d, i){
	  return xscale(d);
	})
	.y(function(d, i){
	  var th = d/m * foobar.theta
	  var ph = (n-data.index) * foobar.phase
	  var y = foobar.amplitude * Math.sin(freq * th + ph);
	})
	.interpolate("basis")
	//.interpolate("linear")
  return svgline(data.data);
}

functoin lineenter(d, i){
  d3.select(this).selectAll("path.path")
	.data([d])
	.enter()
  .append("svg:path")
	.attr("class", "path")
	.attr("stroke-width", foobar.stroke_width)
	//.attr("stroke-width", function(e, i){ return e.width;})
	.attr("stroke", "#fff")
	.attr("fill", "none")
  update_spaceing()
}



