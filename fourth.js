var user = document.getElementById("username");
var pass = document.getElementById("password");
var sub = document.getElementById("submit");
var header = document.getElementById("heading")

sub.addEventListener("click", function(e) {
  e.preventDefault();
  if (user.value.length < 14 && pass.value === "12345678") {
    header.innerText = "Congrats on knowing your username and password!";
  } else {
  alert("Incorrect username or password");
  }
})
