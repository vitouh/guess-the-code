// === MATRIX BACKGROUND ===
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = Array(256).join("0").split("");

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  letters.forEach((y, i) => {
    const text = String.fromCharCode(3e4 + Math.random() * 33);
    const x = i * 10;
    ctx.fillText(text, x, y);
    letters[i] = y > 758 + Math.random() * 1e4 ? 0 : y + 10;
  });
}
setInterval(drawMatrix, 33);

// === CODE CHECKER LOGIC ===
const insults = [
  "Are you even trying?",
  "My grandma guesses better.",
  "You're embarrassing yourself.",
  "Try opening your eyes.",
  "Seriously?",
  "Incorrect. Just like your life choices.",
  "404: Brain not found.",
  "This is painful to watch.",
  "I could do better with my monitor turned off.",
  "Even Patrick could guess better."
];

const hints = [
  "Hint: It's a code only a true genius would try.",
  "Hint: It has numbers and letters...",
  "Hint: Some letters look like numbers.",
  "Hint: L33t speak, maybe?",
  "Hint: You're being insulted in the code.",
  "Hint: Check the vibe: y0urr3_s0_dumB"
];

let attempts = 0;

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");
  const hint = document.getElementById("hint");

  if (input === "y0urr3_s0_dumB") {
    document.getElementById("container").style.display = "none";
    document.getElementById("playScreen").style.display = "flex";
  } else if (input.toLowerCase() === "password") {
    document.getElementById("container").style.display = "none";
    document.getElementById("easterEggScreen").style.display = "flex";
  } else {
    message.textContent = insults[Math.floor(Math.random() * insults.length)];
    if (attempts < hints.length - 1) {
      attempts++;
      hint.textContent = hints[attempts];
    }
    setTimeout(() => message.textContent = "", 2000);
  }
}

// === PLAY RICKROLL ===
function playRickroll() {
  document.getElementById("playScreen").innerHTML = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0" allow="autoplay"></iframe>
  `;
}
