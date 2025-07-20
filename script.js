function checkPassword() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const download = document.getElementById("downloadLink");
  const success = document.getElementById("successSound");
  const fail = document.getElementById("failSound");

  if (password === "donvito") {
    message.style.color = "lime";
    message.textContent = "Access Granted!";
    download.style.display = "block";
    success.play();
  } else {
    message.style.color = "red";
    message.textContent = insults[Math.floor(Math.random() * insults.length)];
    download.style.display = "none";
    fail.play();
  }
}
