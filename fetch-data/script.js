const postList = document.getElementById("post-list");
const template = document.getElementById("post-template");

const defaultLimit = 10;

async function fetchPosts(limit = defaultLimit) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  postList.innerHTML = ""; 
  posts.forEach((post) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").innerText = post.title;
    clone.querySelector(".card-text").innerText = post.body;
    postList.appendChild(clone);
  });
}

fetchPosts();
