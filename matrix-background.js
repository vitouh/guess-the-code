// Falling Matrix Effect
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
