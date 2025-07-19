const correctPasswords = ["vit0isc00L", "acr33", "y0ur3_s0_dUmBB"];
const insults = [
  "Incorrect... again? Really?",
  "Do you even know what you're doing?",
  "You're embarrassing yourself.",
  "My toaster could do better.",
  "Try harder, script kiddie.",
  "Is that all you've got?",
  "Access denied. You're not elite.",
  "You're getting roasted by HTML."
];

let attempts = 0;
const hintBox = document.getElementById("hint");
const insultBox = document.getElementById("insult");
const input = document.getElementById("password");
const fileContainer = document.getElementById("file-container");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const pwd = input.value.trim();
    input.disabled = true;

    if (correctPasswords.includes(pwd)) {
      document.getElementById("success-sound").play();
      insultBox.innerText = "Access granted.";
      simulateLoading(() => {
        fileContainer.style.display = "block";
        hintBox.innerText = "";
      });
    } else {
      document.getElementById("fail-sound").play();
      attempts++;
      input.value = "";
      insultBox.innerText = insults[attempts % insults.length];

      if (attempts % 3 === 0 && attempts / 3 <= "vit0isc00L".length) {
        let hint = "vit0isc00L".split("").map((c, i) =>
          i < attempts / 3 ? c : "_"
        ).join("");
        hintBox.innerText = `Hint: ${hint}`;
      }

      setTimeout(() => {
        input.disabled = false;
        input.focus();
      }, 3000);
    }
  }
});

function simulateLoading(callback) {
  insultBox.innerText = "Loading secret file...";
  let dots = 0;
  const interval = setInterval(() => {
    insultBox.innerText += ".";
    dots++;
    if (dots > 5) {
      clearInterval(interval);
      callback();
    }
  }, 500);
}

function showRickroll() {
  document.getElementById("rickroll-modal").style.display = "block";
}

function hideRickroll() {
  document.getElementById("rickroll-modal").style.display = "none";
}

// Matrix background animation
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.querySelector(".matrix").appendChild(canvas);

const ctx = canvas.getContext("2d");
const columns = Math.floor(canvas.width / 10);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = "10pt Courier";

  for (let i = 0; i < drops.length; i++) {
    const char = Math.random() > 0.5 ? "1" : "0";
    ctx.fillText(char, i * 10, drops[i] * 10);

    if (drops[i] * 10 > canvas.height || Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
