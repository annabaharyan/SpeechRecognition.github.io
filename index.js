const microphone = document.querySelector("button");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let recognizing;
function reset() {
  recognizing = false;
}
recognition.onresult = function (event) {
  console.log("you say =>", event.results[0][0].transcript);
};

function toggleStartStop() {
  if (recognizing) {
    recognition.stop();
    console.log("end");
    reset();
  } else {
    recognition.start();
    console.log("start");
    recognizing = true;
  }
}

microphone.addEventListener("mousedown", toggleStartStop);
microphone.addEventListener("mouseup", toggleStartStop);
