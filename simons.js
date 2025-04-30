let gameSeq = [];
let userSeq = [];
let hScore = 0;

let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let box = document.querySelector("box");
let first = false;
let level = 0;
let h1 = document.querySelector("h1");

let btns = ["a", "b", "c", "d"];
body.addEventListener("keypress", function () {
  if (first == false) {
    console.log("clicked to start game");

    setTimeout(function () {
      levelup();
    }, 300);


    let allBtns = document.querySelectorAll(".box");
    for (btn of allBtns) {
      btn.addEventListener("click", btnPressed);
    }


    first = true;
  }
});
// ==========================================================
function btnflash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
// =====================================================
function userBtnflash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}
// =========================================================
function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIndex = Math.floor(Math.random() * 4);
  let randColor = btns[randIndex];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);

  btnflash(randbtn);
}
// ==========================================================
function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelup, 1000);
    }
    console.log("same value");
  } else {
    h2.innerHTML = `Game Over !<br>Your Score :${level}<br> Press any key to Start`;
    if (hScore <= level) {
      hScore = level;
      h1.innerHTML = `<p>HIGH SCORE :${hScore}</p>`;
    }

    body.style.backgroundColor="red";

    setTimeout(function () {
      body.style.backgroundColor="white";
    }, 100);

    reset();
  }
}
// ===================================================
function btnPressed() {
  let btn = this;
  userBtnflash(btn);
  userSeq.push(btn.id);
  
  checkAns(userSeq.length - 1);
}
// ====================================================
function reset() {
  first = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
