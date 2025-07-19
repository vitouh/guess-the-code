const correctCodes = ["vit0isc00L", "acr33", "y0ur3_s0_dUmBB"];
let attempts = 0;
let hintReveal = 0;

function playSound(success) {
  const audio = new Audio(success ? 'success.mp3' : 'fail.mp3');
  audio.play();
}

function checkCode() {
  const input = document.getElementById("codeInput").value;
  const feedback = document.getElementById("feedback");

  if (correctCodes.includes(input)) {
    playSound(true);
    feedback.textContent = "Access granted.";
    feedback.style.color = "#0f0";
  } else {
    playSound(false);
    feedback.textContent = getInsult();
    feedback.style.color = "red";
    attempts++;

    // Hint system
    const hint = document.getElementById("hint");
    const real = "vit0isc00L";
    if (attempts % 3 === 0 && hintReveal < real.length) {
      hintReveal++;
    }

    hint.textContent = "Hint: " + "_".repeat(real.length - hintReveal) + real.slice(real.length - hintReveal);

    // Cooldown
    document.getElementById("codeInput").disabled = true;
    setTimeout(() => {
      document.getElementById("codeInput").disabled = false;
    }, 3000);
  }
}

function getInsult() {
  const insults = [
    "Wrong. You're not very bright, huh?",
    "Nope. Try again, Einstein.",
    "You call that a guess?",
    "Still wrong. Yikes.",
    "You're just embarrassing yourself now.",
    "Error 404: Intelligence not found."
  ];
  return insults[Math.floor(Math.random() * insults.length)];
}

function openSecretFile() {
  const loader = document.getElementById("loader");
  const video = document.getElementById("rickroll");

  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    video.classList.remove("hidden");
    video.play();
  }, 2000);
}
