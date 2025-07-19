const correctPasswords = ["vitoiscool", "y0uR3_s0_dUMbb"];
const insultElement = document.getElementById("insult");
const successSound = document.getElementById("successSound");
const failSound = document.getElementById("failSound");

function checkPassword() {
  const input = document.getElementById("password").value;
  if (correctPasswords.includes(input)) {
    successSound.play();
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
  } else {
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    insultElement.textContent = randomInsult;
    failSound.play();
  }
}

function showFile() {
  const loadingBar = document.getElementById("loading-bar");
  const progress = document.getElementById("progress");
  const video = document.getElementById("rickroll");

  loadingBar.classList.remove("hidden");
  let width = 0;
  const interval = setInterval(() => {
    width++;
    progress.style.width = width + "%";
    if (width >= 100) {
      clearInterval(interval);
      loadingBar.classList.add("hidden");
      video.classList.remove("hidden");
      video.play();
    }
  }, 30);
}
