// Load insults from insults.js first
const correctPasswords = ["vitoiscool", "y0uR3_s0_dUMbb"];
const responseBox = document.getElementById('response');
const form = document.getElementById('crackForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('codeInput').value.trim();

  if (correctPasswords.includes(input)) {
    responseBox.textContent = "✅ Access Granted. You're in.";
    responseBox.style.color = "#0f0";
    responseBox.style.fontWeight = "bold";
  } else if (insults.hasOwnProperty(input)) {
    responseBox.textContent = insults[input];
    responseBox.style.color = "#ff3333";
    responseBox.style.fontWeight = "bold";
  } else {
    responseBox.textContent = "❌ Incorrect code. Try again.";
    responseBox.style.color = "#f00";
    responseBox.style.fontWeight = "bold";
  }
});
