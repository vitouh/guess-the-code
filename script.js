const correctPasswords = ["acr33"];
const specialPasswords = {
  "vit0isc00L": "y0Ur3_s0_dUmBB",
};

let incorrectCount = 0;
let cooldownActive = false;

document.getElementById("terminal-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const input = this.value.trim();
    this.value = "";
    processCommand(input);
  }
});

function processCommand(input) {
  const output = document.getElementById("output");

  if (specialPasswords[input]) {
    output.innerHTML += `Welcome back, Agent Vito.\nOpening file...\n`;
    setTimeout(() => {
      window.location.href = specialPasswords[input] + ".html";
    }, 2000);
    return;
  }

  if (correctPasswords.includes(input)) {
    output.innerHTML += "Access granted.\nOpening file...\n";
    setTimeout(() => {
      window.location.href = "rickroll.html";
    }, 2000);
  } else {
    incorrectCount++;
    output.innerHTML += `Access denied: ${input}\n`;

    if (incorrectCount % 3 === 0) {
      triggerHint(output);
    }
  }
}

function triggerHint(output) {
  if (cooldownActive) return;

  const hint = generateHint();
  output.innerHTML += `Hint: ${hint}\n`;

  cooldownActive = true;
  setTimeout(() => {
    cooldownActive = false;
  }, 10000); // 10s cooldown
}

function generateHint() {
  const password = correctPasswords[0];
  let scrambled = password.split('').sort(() => Math.random() - 0.5).join('');
  return `Password letters (randomized): ${scrambled}`;
}
