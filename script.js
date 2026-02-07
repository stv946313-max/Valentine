const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const result = document.getElementById("result");
const noText = document.getElementById("noText");

let yesSize = 1;
let noMessages = [
  "Are you sure? 😢",
  "Think again 💔",
  "Pleaseee 🥺",
  "Don't break my heart 😭",
  "Last chance 😳"
];
let noIndex = 0;

noBtn.addEventListener("click", () => {
  // YES button grows
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  // NO button moves
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Message changes
  noText.innerText = noMessages[noIndex % noMessages.length];
  noIndex++;
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  result.classList.remove("hidden");
});
