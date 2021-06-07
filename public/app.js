let width = 1000;
let height = 800;

const svg = d3
  .select("#my_bookmap")
  .attr("width", width)
  .attr("height", height);

let projection = d3
  .geoEquirectangular()
  .center([75, 15])
  .scale(500)
  .translate([width / 2, height / 2]);
//projection function takes [longitude, latitude] & outputs [x,y]
//use geoEquirectangular or geoMercator

let geoGenerator = d3.geoPath().projection(projection);

const geoJson = d3.json("custom.geo.json", (error, data) => {
  if (error) console.error(error);
  const dataFeatures = data.features;
  let index = -1;
  svg
    .selectAll("path")
    .data(dataFeatures)
    .enter()
    .append("path")
    .attr("class", () => {
      index++;
      return `mapColor${dataFeatures[index].properties.mapcolor9}`;
    })
    .attr("d", geoGenerator);

  index = -1;

  svg
    .selectAll(".countryLabel")
    .data(dataFeatures)
    .enter()
    .append("text")
    .attr("class", "countryLabel")
    .attr("transform", function (d) {
      return "translate(" + geoGenerator.centroid(d) + ")";
    })
    .text(() => {
      index++;
      return dataFeatures[index].properties.name;
    });
});
