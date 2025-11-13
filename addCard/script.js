function addCard(title, text, containerId = 'card-list') {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = title;
  template.querySelector('.card-text').innerText = text;
  document.getElementById(containerId).appendChild(template);
}

addCard("Exercise 1 Example Card", "This card shows dynamic content using addCard() function.");


const data = [
  {name: 'Thing 1', age: 23},
  {name: 'Thing 2', age: 39}
];

data.forEach(person => {
  addCard(person.name, "Age: " + person.age);
});

const artist = {
  name: "Van Gogh",
  portfolio: [
    {title: "Portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
    {title: "Sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"}
  ]
};

addCard(artist.name, "Artist Portfolio:", 'portfolio-list');

artist.portfolio.forEach(item => {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = item.title;

  const img = document.createElement("img");
  img.src = item.url;
  img.alt = item.title;
  template.querySelector('.card-text').appendChild(img);

  document.getElementById('portfolio-list').appendChild(template);
});
