const fs = require("fs");
const Country = require("./countries");
const db = require("./database");

async function read(path) {
  const geoJSON = await fs.promises.readFile(path);
  const unsortedData = JSON.parse(geoJSON);
  const sortedData = unsortedData.features.map((country) => {
    return {
      name: country.properties.name,
      geometry: country.geometry,
    };
  });
  await db.sync({ force: true });
  await Promise.all(
    sortedData.map((country) => {
      return Country.create(country);
    })
  );
  //Country.bulkCreate(sortedData, {returning: true})
  console.log("hereeee");
}

read("../../custom.geo.json").catch(console.error);
