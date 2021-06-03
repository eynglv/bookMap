const fs = require("fs");
const Book = require("./db/book");
const db = require("./db/database");

async function read(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (dirent.name === "0.json") {
      const encodedContent = await fs.promises.readFile(
        `${path}/${dirent.name}`
      );
      const decodedContent = JSON.parse(encodedContent);
      const bookList = Object.keys(decodedContent).map((title) => {
        return {
          title: title,
          author: decodedContent[title][0][0],
          publisher: decodedContent[title][0][1],
          isbn: decodedContent[title][0][2],
        };
      });
      await db.sync({ force: true });
      Book.bulkCreate(bookList, { returning: true });
      console.log("here");
    }
  }
}

read("/Users/elvyyang/Documents/Scrapes/oxford_scrape/book_data").catch(
  console.error
);
