let width = 1300;
let height = 800;

const svg = d3
  .select("#my_bookmap")
  .attr("width", width)
  .attr("height", height);

let projection = d3
  .geoEquirectangular()
  .center([85, 15])
  .scale(500)
  .translate([width / 2, height / 2]);
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
    .attr("class", (data) => {
      return `mapColor${data.properties.mapcolor9}`;
    })
    .attr("d", geoGenerator)
    .on("mouseover", function (data) {
      d3.select(this).classed("active", true);
    })
    .on("mouseout", function (data) {
      d3.select(this).classed("active", false);
    })
    .on("click", getData);

  svg
    .selectAll(".countryLabel")
    .data(dataFeatures)
    .enter()
    .append("text")
    .attr("class", "countryLabel")
    // .attr("dy", ".35em") dunno what this does
    .attr("transform", (data) => {
      return "translate(" + geoGenerator.centroid(data) + ")";
    })
    .text((data) => {
      return data.properties.name;
    });
});

function getData(data) {
  console.log(data);
  // d3.request("").get(
  //   data,
  //   () => {
  //     console.log("dATA", data);
  //   }
  // );
  //furrrrkkkkkk
  //axios get request with name in headers? questionable
}
