let pageOne = document.querySelector(".page_one");
let thanks = document.querySelector(".thanks");
let submit = document.querySelector("button");
let ratingBtns = document.querySelectorAll(".rating-btn");
let score = document.querySelector(".score");
let startScore = 0;

submit.addEventListener("click", onSubmit);

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  score.textContent = startScore;
  thanks.style.cssText = "display: block;";
  pageOne.style.cssText = "display: none;";
}

// function handleRatingBtnClick(event) {
//   ratingBtns.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   event.target.classList.add("active");
//   startScore = event.target.textContent;
//   console.log(startScore);
// }

function handleRatingBtnClick(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  if (event.target.classList.contains("rating-btn")) {
    event.target.classList.add("active");
  } else {
    event.target.parentElement.classList.add("active");
  }
  startScore = event.target.textContent;
}
