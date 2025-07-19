const secretCodes = ["vitoiscool", "youresodumb"];

function checkCode() {
  const input = document.getElementById("codeInput").value.toLowerCase();
  if (secretCodes.includes(input)) {
    document.getElementById("inputScreen").classList.add("hidden");
    document.getElementById("insultScreen").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("insultScreen").classList.add("hidden");
      document.getElementById("endScreen").classList.remove("hidden");
    }, 3000);
  } else {
    alert("Invalid code.");
  }
}

document.getElementById("secretFile").addEventListener("click", () => {
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("loadingScreen").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden");
    document.getElementById("rickroll").classList.remove("hidden");
  }, 3000);
});
