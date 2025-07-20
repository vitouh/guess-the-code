let attempts = 0;
const correctPasswords = {
  "vit0isc00L": { hint: "He thinks he's cool. Maybe he is?" },
  "y0UrE_s0_DumBB": { hint: null },
  "acr33": { isAdmin: true }
};

const easterEggs = {
  "password": "🤓 Bro used 'password' as the password. Skibidi brain detected.",
  "1234": "Did your grandma set that password?",
  "admin": "You are not him 💀",
  "sigma": "Not very sigma of you to guess that.",
  "letmein": "Door is locked for a reason, genius.",
  "guest": "This ain’t a hotel.",
  "opensesame": "Wrong magic words, Aladdin.",
  "hacker": "Just because you type 'hacker' doesn't make you one.",
  "qwerty": "Try using your whole brain.",
  "iloveyou": "Bro confessed to a login screen 😭",
  "jumpscare": "👻💥", // will trigger below
};

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const msg = document.getElementById("message");
  const hint = document.getElementById("hint");
  const failCount = document.getElementById("failCount");

  if (input in correctPasswords) {
    if (input === "acr33") {
      window.location.href = "admin.html";
    } else if (input === "vit0isc00L") {
      showLoadingThen(() => window.location.href = "rickroll.html");
    } else if (input === "y0UrE_s0_DumBB") {
      showLoadingThen(() => window.location.href = "rickroll.html");
    }
    return;
  }

  if (input in easterEggs) {
    if (input === "jumpscare") {
      showJumpscare();
    } else {
      msg.innerText = easterEggs[input];
    }
  } else {
    const insult = getRandomInsult();
    msg.innerText = `❌ Incorrect password. ${insult}`;
  }

  attempts++;
  failCount.innerText = `Failed Attempts: ${attempts}`;

  if (input === "vit0isc00L" && attempts % 3 === 0) {
    hint.innerText = correctPasswords["vit0isc00L"].hint;
  } else {
    hint.innerText = "";
  }
}

function showLoadingThen(callback) {
  const msg = document.getElementById("message");
  msg.innerText = "Loading system...";
  let dots = 0;
  const interval = setInterval(() => {
    dots = (dots + 1) % 4;
    msg.innerText = "Loading" + ".".repeat(dots);
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    callback();
  }, 3000);
}

function showJumpscare() {
  const body = document.body;
  body.innerHTML = '';
  const img = document.createElement('img');
  img.src = 'jumpscare.jpg';
  img.style.width = '100vw';
  img.style.height = '100vh';
  img.style.objectFit = 'cover';
  img.style.position = 'fixed';
  img.style.top = 0;
  img.style.left = 0;
  const audio = new Audio('scream.mp3');
  body.appendChild(img);
  audio.play();
}

function getRandomInsult() {
  const insults = [
    "That guess had 0 brain cells involved.",
    "Even my cat can guess better.",
    "You're one password away from a clown badge.",
    "Try again, TikTok genius.",
    "The system is embarrassed for you.",
    "Are you typing with your forehead?",
    "You make ChatGPT cry.",
    "Your password skills are as bad as your rizz.",
    "That was not very sigma of you.",
    "Your password game is weaker than your Wi-Fi."
  ];
  return insults[Math.floor(Math.random() * insults.length)];
}
