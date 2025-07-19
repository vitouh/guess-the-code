function checkCode() {
  const input = document.getElementById("codeInput").value.toLowerCase();
  const insultLine = document.getElementById("insultLine");

  if (input === "vitoiscool") {
    new Audio('success.mp3').play();
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");
  } else {
    insultLine.textContent = getRandomInsult();
    new Audio('fail.mp3').play();
  }
}

function revealFile() {
  document.querySelector(".file-container").classList.add("hidden");
  document.getElementById("loader").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("rickroll").classList.remove("hidden");
  }, 3000);
}
