let url = "https://kontests.net/api/v1/all";

let result = fetch(url);
let cards;
result.then((contest) => {
    return contest.json();
}).then((contest) => {
    cards = "";
    for (item in contest) {
        cards += `
    <div class="card">
    <img
      src="https://img.freepik.com/premium-vector/coder-developer-concentrated-working-project-developing-programming-coding-technologies_569013-336.jpg?w=2000"
      class="card-img-top" alt="Coding" id="cardimg">
    <div class="card-body">
      <h5 id="card-title">${contest[item].site}</h5>
      <p class="text2">${contest[item].start_time}</p>
      <p class="text2">${contest[item].end_time}</p>
      <a href="${contest[item].url}" class="btn btn-primary">Visit Contest</a>
    </div>
  </div>
  `
    }
    cardcontainer.innerHTML = cards;
})
