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
    const insult = insults[Math.floor(Math.random() * insults.length)];
    message.textContent = insult;

    attempts++;
    if (attempts < hints.length) {
      hint.textContent = hints[attempts];
    }

    setTimeout(() => message.textContent = \"\", 2000);
  }
}
