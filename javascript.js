// console.log("it works right?")

var h2Tag = document.createElement("h2");
document.body.appendChild(h2Tag);
h2Tag.textContent = "Click the start button to start the test, and the timer. Once the timer runs out, or you answer all questions, the test will be over. Incorrect answers will remove time from the timer so chose your answers carefully. Good Luck!";
h2Tag.style.textAlign = "center";
h2Tag.style.textDecoration = "fade"

var addButton = document.querySelector("#start");

