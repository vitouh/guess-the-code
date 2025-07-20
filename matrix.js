// matrix.js
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%#@!*&";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = Array(Math.floor(columns)).fill(1);

// Draw function
function drawMatrix() {
  // Black background with low opacity to show trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Matrix green
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop to top if it goes off screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
