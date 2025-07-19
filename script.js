const correctPasswords = ["vit0isc00L", "acr33", "y0ur3_s0_dUmBB"];
let wrongAttempts = 0;
let hint = "_________";
let cooldown = false;

const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
const hintArea = document.getElementById("hintArea");
const failSound = document.getElementById("failSound");
const successSound = document.getElementById("successSound");

function revealHint() {
  const real = "vit0isc00L";
  let revealed = hint.split('');
  const nextIndex = Math.floor(wrongAttempts / 3);
  if (nextIndex < real.length) {
    revealed[nextIndex] = real[nextIndex];
    hint = revealed.join('');
    hintArea.textContent = "Hint: " + hint;
  }
}

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !cooldown) {
    const val = passwordInput.value;
    if (correctPasswords.includes(val)) {
      successSound.play();
      message.textContent = "Access Granted.";
      message.style.color = "#0f0";
      setTimeout(() => {
        window.location.href = "rickroll.mp4";
      }, 1000);
    } else {
      failSound.play();
      const insult = insults[Math.floor(Math.random() * insults.length)];
      message.textContent = insult;
      message.style.color = "#f00";
      wrongAttempts++;
      revealHint();
      cooldown = true;
      passwordInput.disabled = true;
      setTimeout(() => {
        passwordInput.disabled = false;
        passwordInput.value = "";
        cooldown = false;
      }, 3000);
    }
  }
});
