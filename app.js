import * as d3 from "d3";

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

const projection = d3
  .geoNaturalEarth1()
  .scale(width / 1.3 / Math.PI)
  .translate([width / 2, height / 2]);

d3.json("/custom.geo.json", (data) => {
  svg.append("g");
});
