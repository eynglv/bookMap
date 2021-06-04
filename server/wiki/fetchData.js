const xhr = new XMLHttpRequest();
const url =
  "http://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=List_of_Asian_countries_by_population&section=1&prop=links";

xhr.open("GET", url, true);

xhr.onload = function () {
  const data = JSON.parse(this.response);
  const links = data.parse.links;
  links.forEach((link) => {
    if (link.ns === 0) {
      const countries = Object.values(link)[2];
    }
  });
};

xhr.send();
