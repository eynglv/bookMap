let width = 1000;
let height = 1000;

const svg = d3
  .select("#my_bookmap")
  .attr("width", width)
  .attr("height", height);

let projection = d3.geoEquirectangular();
//projection function takes [longitude, latitude] & outputs [x,y]
//use geoEquirectangular or geoMercator

let geoGenerator = d3.geoPath().projection(projection);

const geoJson = d3.json("custom.geo.json", (error, data) => {
  if (error) console.error(error);
  const dataFeatures = data.features;
  svg
    .selectAll("path")
    .data(dataFeatures)
    .enter()
    .append("path")
    .attr("d", geoGenerator);
});