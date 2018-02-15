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
//.
  .interpolate()
  .range()
*/
var color = color_scale

var sw = tributary.sw * 1.1;//
//
//

