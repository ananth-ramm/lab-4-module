let newsItems = [
  { title: "Election Results", content: "Newly elected minister..." },
  { title: "Sporting Success", content: "World Cup winners..." },
  { title: "Tornado Warning", content: "Residents should prepare..." }
];

let currentIndex = 0;
let intervalId;

function renderNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  newsItems.forEach(item => {
    const template = document.getElementById("news-template").content.cloneNode(true);
    template.querySelector(".card-title").innerText = item.title;
    template.querySelector(".card-text").innerText = item.content;
    container.appendChild(template);
  });
}

function refreshNews() {
  currentIndex++;
  if (currentIndex >= newsItems.length) currentIndex = 0;
  renderNews();
}

function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(refreshNews, 4000); // every 4 seconds
  }
}

function stopInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById("news-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("news-title").value.trim();
  const content = document.getElementById("news-content").value.trim();
  if (title && content) {
    newsItems.push({ title, content });
    document.getElementById("news-form").reset();
  }
});

document.getElementById("stop-btn").addEventListener("click", stopInterval);
document.getElementById("start-btn").addEventListener("click", startInterval);

renderNews();
startInterval();
