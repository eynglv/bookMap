const fs = require("fs");

async function read(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (dirent.name === "0.json") {
      const contents = await fs.promises.readFile(`${path}/${dirent.name}`);
      console.log(JSON.parse(contents));
    }
    // console.log(dirent.name);
  }
}
read("/Users/elvyyang/Documents/Scrapes/oxford_scrape/book_data").catch(
  console.error
);
