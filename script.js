const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");
const questionBox = document.getElementById("questionBox");
const resultBox = document.getElementById("resultBox");

let yesSize = 18;
let noMessages = [
  "Are you sure? 😳",
  "Think again 😜",
  "Don't break my heart 💔",
  "Pleaseee 🥺",
  "Last chance 😢"
];
let msgIndex = 0;

noBtn.addEventListener("click", () => {
  yesSize += 4;
  yesBtn.style.fontSize = yesSize + "px";

  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";

  noText.innerText = noMessages[msgIndex % noMessages.length];
  msgIndex++;
});

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
});
