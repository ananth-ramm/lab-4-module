const cardsData = [
  {
    title: "Card 1",
    text: "This is some example text for card 1.",
    image: "https://picsum.photos/400/200?random=1"
  },
  {
    title: "Card 2",
    text: "This is some example text for card 2.",
    image: "https://picsum.photos/400/200?random=2"
  },
  {
    title: "Card 3",
    text: "This is some example text for card 3.",
    image: "https://picsum.photos/400/200?random=3"
  },
  {
    title: "Card 4",
    text: "This is some example text for card 4.",
    image: "https://picsum.photos/400/200?random=4"
  },
  {
    title: "Card 5",
    text: "This is some example text for card 5.",
    image: "https://picsum.photos/400/200?random=5"
  },
  {
    title: "Card 6",
    text: "This is some example text for card 6.",
    image: "https://picsum.photos/400/200?random=6"
  },
  {
    title: "Card 7",
    text: "This is some example text for card 7.",
    image: "https://picsum.photos/400/200?random=7"
  },
  {
    title: "Card 8",
    text: "This is some example text for card 8.",
    image: "https://picsum.photos/400/200?random=8"
  }
];

function addBootstrapCard(data) {
  const template = document.getElementById("bootstrap-card-template").content.cloneNode(true);
  template.querySelector(".card-title").innerText = data.title;
  template.querySelector(".card-text").innerText = data.text;
  template.querySelector("img").src = data.image;
  template.querySelector("img").alt = data.title;

  document.getElementById("card-row").appendChild(template);
}

cardsData.forEach(card => addBootstrapCard(card));
