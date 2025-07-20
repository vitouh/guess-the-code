const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const secretPage = document.getElementById("secretPage");
const agentPage = document.getElementById("agentPage");
const rickroll = document.getElementById("rickroll");
const jumpscare = document.getElementById("jumpscare");
const jumpscareSound = document.getElementById("jumpscareSound");

let attempts = 0;

const correctPasswords = ["vit0isc00L", "y0UrE_s0_DumBB", "acr33"];
const easterEggs = {
  "password": "Bro… really?",
  "123456": "This ain’t your email login, champ.",
  "admin": "You're not that guy, pal.",
  "letmein": "No. Go touch grass.",
  "iloveyou": "🤨 That's not how this works.",
  "opensesame": "Wrong genie.",
  "qwerty": "That’s just sad.",
  "monkey": "Return to monkey. But still wrong.",
  "jumpscare": "trigger-jumpscare"
};

const insults = [
  "💅 That’s not the password, bestie.",
  "Your brain said ‘💨’",
  "Bro typed with eyes closed.",
  "Try again, Einstein 🧠✨",
  "L ratio + no password",
  "You thought you ate? Nah.",
  "TikTok would flame you for that guess.",
  "Go ahead, delete your keyboard.",
  "I bet you peaked in preschool with guesses like that.",
  "Certified goofy attempt 🤡",
  "Your keyboard deserves better.",
  "Even ChatGPT wouldn’t guess that.",
  "That's a password? Or a cry for help?",
  "NPC behavior detected.",
  "Skill issue 💀",
  "Try harder. Or don’t.",
  "This isn’t Roblox, bro.",
  "Stop it. Get some help.",
  "🤡 You’re doing great. At failing.",
  "I can smell the braincells dying."
];

function checkPassword() {
  const input = passwordInput.value.trim();
  attempts++;
  attemptsEl.textContent = `Attempts: ${attempts}`;

  // Correct password
  if (correctPasswords.includes(input)) {
    document.querySelector(".container").style.display = "none";
    secretPage.style.display = "block";
    setTimeout(() => {
      secretPage.style.display = "none";
      agentPage.style.display = "block";
    }, 3000);
    return;
  }

  // Easter Egg Passwords
  if (input in easterEggs) {
    if (easterEggs[input] === "trigger-jumpscare") {
      triggerJumpscare();
      return;
    }
    message.textContent = easterEggs[input];
    return;
  }

  // Random insult
  const insult = insults[Math.floor(Math.random() * insults.length)];
  message.textContent = insult;
}

function playRickroll() {
  rickroll.style.display = "block";
  rickroll.play();
}

function restart() {
  location.reload();
}

function triggerJumpscare() {
  jumpscare.style.display = "block";
  jumpscareSound.play();
  setTimeout(() => {
    jumpscare.style.display = "none";
  }, 2500);
}
