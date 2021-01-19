// console.log("it works right?")

var h1Tag = document.createElement("h1");
h1Tag.textContent = "The Hardest Quiz Ever!";
h1Tag.style.textAlign = "center";

var h2Tag = document.createElement("h2");
h2Tag.textContent = "Click the start button to start the test, and the timer. Once the timer runs out, or you answer all questions, the test will be over. Incorrect answers will remove time from the timer so chose your answers carefully. Good Luck!";
h2Tag.style.textAlign = "center";

var summary = document.querySelector("#summary");
var addButton = document.querySelector("#startbutton");
summary.append(h2Tag)
addButton.addEventListener("click", myScript);
function myScript() {
    console.log("test")
}

var numberoptions - [10, 5, 3, 7];
for (var i = 0; i < numberoptions.length; i++) {}