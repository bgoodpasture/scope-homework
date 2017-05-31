var header = document.getElementById("heading");

document.addEventListener("keydown", function(e) {
  console.log(e);
  header.innerText = e.key;
})
