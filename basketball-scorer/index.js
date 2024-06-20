let homeScoreBoard = document.querySelector(".home-score");
let guestScoreBoard = document.querySelector(".guest-score");
let homeScore = 0;
let guestScore = 0;

let hScore1 = document.querySelector(".home-one");
let hScore2 = document.querySelector(".home-two");
let hScore3 = document.querySelector(".home-three");
let gScore1 = document.querySelector(".guest-one");
let gScore2 = document.querySelector(".guest-two");
let gScore3 = document.querySelector(".guest-three");

homeScoreBoard.textContent = homeScore;
guestScoreBoard.textContent = guestScore;

const scoreIncrement = (score, board) => {
  board === guestScoreBoard ? (guestScore += score) : (homeScore += score);
  board === guestScoreBoard
    ? (guestScoreBoard.textContent = guestScore)
    : (homeScoreBoard.textContent = homeScore);
};

hScore1.addEventListener("click", () => scoreIncrement(1, homeScoreBoard));
hScore2.addEventListener("click", () => scoreIncrement(2, homeScoreBoard));
hScore3.addEventListener("click", () => scoreIncrement(3, homeScoreBoard));

gScore1.addEventListener("click", () => scoreIncrement(1, guestScoreBoard));
gScore2.addEventListener("click", () => scoreIncrement(2, guestScoreBoard));
gScore3.addEventListener("click", () => scoreIncrement(3, guestScoreBoard));
