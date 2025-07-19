const correctPassword = "vit0isc00L";
const quickPasswords = ["acr33", "y0ur3_s0_dUmBB"];
let wrongAttempts = 0;
let cooldown = false;
let revealedHint = Array(correctPassword.length).fill("_");

function checkPassword() {
  if (cooldown) return;

  const input = document.getElementById("password").value;

  if ([correctPassword, ...quickPasswords].includes(input)) {
    document.getElementById("successSound").play();
    showEndScreen();
  } else {
    document.getElementById("failSound").play();
    wrongAttempts++;

    document.getElementById("insult").textContent = getRandomInsult();
    revealHint();

    cooldown = true;
    setTimeout(() => cooldown = false, 3000);
  }

  document.getElementById("password").value = "";
}

function revealHint() {
  const step = Math.floor(wrongAttempts / 3);
  for (let i = 0; i < step && i < correctPassword.length; i++) {
    revealedHint[i] = correctPassword[i];
  }
  document.getElementById("revealedHint").textContent = revealedHint.join("");
}

function showEndScreen() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("endScreen").style.display = "block";
}

function showRickRoll() {
  const bar = document.getElementById("loadingBar");
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = "100%";
  }, 50);
  
  setTimeout(() => {
    window.location.href = "rickroll.mp4";
  }, 2200);
}
