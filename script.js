const passwords = [
  "vitoiscool",
  "y0uR3_s0_dUMbb",
  "1337h4x0r",
  "thematrix",
  "iaminevitable",
  "password123",
  "admin",
  "skibidirizzler",
  "caseoh_eat",
  "tryagainlol",
  "notgoodenough"
];

const realPasswords = ["vitoiscool", "y0uR3_s0_dUMbb"];

const insults = [
  "Access denied. You're not even close.",
  "Wrong. Maybe try asking your cat for help?",
  "Do you even know what a password is?",
  "Pathetic attempt. Try harder.",
  "You're embarrassing yourself.",
  "That's cute. But no.",
  "404: Your brain not found.",
  "Go touch grass, hacker wannabe.",
  "Even my toaster could guess better.",
  "Rizz? More like miss.",
  "Come back when you grow a brain cell."
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const response = document.getElementById("response");

  if (realPasswords.includes(input)) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (passwords.includes(input)) {
    response.textContent = "Easter egg found! But still wrong.";
  } else {
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    response.textContent = randomInsult;
  }
}

// Matrix background effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
