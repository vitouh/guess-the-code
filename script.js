let insults = [
  "Is that all you've got?",
  "Try again, genius.",
  "My grandma types faster than you.",
  "Seriously?",
  "Wrong. Again.",
  "This is getting sad.",
  "I'm losing faith in humanity.",
  "Oof, embarrassing.",
  "C'mon, you can do better than that.",
  "Even a potato would’ve cracked it by now."
];

let correctPassword = "sigma";
let attemptCount = 0;
let hintRevealed = 0;
let cooldown = false;

function checkPassword() {
  if (cooldown) {
    alert("Too fast. Wait a bit...");
    return;
  }

  let input = document.getElementById("password").value;
  if (input === correctPassword) {
    window.location.href = "rickroll.html";
  } else {
    attemptCount++;
    let insult = insults[Math.floor(Math.random() * insults.length)];
    document.getElementById("insult").innerText = insult;

    if (attemptCount % 3 === 0) {
      showHint();
    }

    cooldown = true;
    setTimeout(() => {
      cooldown = false;
    }, 1500); // 1.5 seconds cooldown
  }
}

function showHint() {
  if (hintRevealed >= correctPassword.length) return;

  let hintChar = correctPassword.charAt(hintRevealed);
  let fakeChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomized = hintChar;

  while (randomized.length < 6) {
    let randomChar = fakeChars.charAt(Math.floor(Math.random() * fakeChars.length));
    if (!randomized.includes(randomChar)) {
      randomized += randomChar;
    }
  }

  randomized = randomized.split('').sort(() => 0.5 - Math.random()).join('');
  let hintElement = document.createElement("div");
  hintElement.className = "hint";
  hintElement.innerText = `One of the letters is: ${randomized}`;
  document.body.appendChild(hintElement);

  hintRevealed++;
}
