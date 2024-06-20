const posts = [
  {
    id: 1,
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    id: 2,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    id: 3,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.querySelector("main");

function imgGen(source, attr) {
  return attr
    ? `<img id=${attr} src="${source}" alt="Image">`
    : `<img src="${source}" alt="Image">`;
}

function generateFeed(obj) {
  const feed = `
        <section class="feed">
            <div class="feed-header">
                ${imgGen(obj.avatar)}
                <div>
                    <h3>${obj.name}</h3>
                    <p>${obj.location}</p>
                </div>
            </div>
            ${imgGen(obj.post)}
            <div class="icons-container">
                ${imgGen("images/icon-heart.png", "likes-icon")}
                ${imgGen("images/icon-comment.png")}
                ${imgGen("images/icon-dm.png")}
            </div>
            <p class="likes">${obj.likes} likes</p>
            <p class="caption">
                <span>${obj.username}</span> ${obj.comment}
            </p>
        </section>    
        `;
  return feed;
}
function render() {
  const innerContent = posts.map((post) => {
    return generateFeed(post);
  });
  mainEl.innerHTML = innerContent.join(" ");
  addEventListener();
}
render();
function addEventListener() {
  const likesEl = document.querySelectorAll("#likes-icon");

  likesEl.forEach((like, index) => {
    like.addEventListener("dblclick", () => likesIncrement(index + 1));
  });
}

function likesIncrement(id) {
  console.log(id);
  const likedFeed = posts.filter((post) => post.id === id);
  likedFeed[0].likes += 1;
  render();
}
