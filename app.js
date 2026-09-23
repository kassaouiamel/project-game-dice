const rollBtn = document.querySelector(".btn-roll");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let score0 = document.querySelector(".score-0");
let score1 = document.querySelector(".score-1");
let diceImg = document.querySelector("img");
let current0 = document.querySelector(".current-score-0");
let current1 = document.querySelector(".current-score-1");

/////// start condition ::

score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add("hidden");
let score = 0;
let activePlayer = 0;
let scores = [0, 0];


///// roll functionnality ::

rollBtn.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1; //// 1 ==>

  //// u.u.i ==>
  diceImg.src = `dice-${diceNumber}.png`;
  diceImg.classList.remove("hidden");
  if (diceNumber !== 1) {
    score += diceNumber;
    document.querySelector(`.current-score-${activePlayer}`).textContent =
      score;
  } else {
    score = 0;
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("active");
    player0.classList.toggle("active");
  }
});

////hold

holdBtn.addEventListener("click", function () {

  scores[activePlayer] = scores[activePlayer] + currentScore;

  if (activePlayer === 0) {
    score0.textContent = scores[0];
  } else {
    score1.textContent = scores[1];
  }

  if (scores[activePlayer] >= 100) {

    console.log("Le joueur a gagné !");

  } else {

    activePlayer = activePlayer === 0 ? 1 : 0;

    currentScore = 0;

    current0.textContent = 0;
    current1.textContent = 0;

    player0.classList.toggle("active");
    player1.classList.toggle("active");
  }
});

