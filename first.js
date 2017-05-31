var somethingElse1 = document.getElementById("one");
var somethingElse2 = document.getElementById("two");

somethingElse1.addEventListener("click", function() {
  text.innerText = "I'm right";
})

somethingElse2.addEventListener("click", function() {
  text.innerText = "No, I'm right!";
})

// EVIL CODE
// somethingElse.addEventListener("click", function() {
//   console.log("please work")
// })
