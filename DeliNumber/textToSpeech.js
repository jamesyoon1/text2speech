
   
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

//get voices
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  //voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  
  // Google US English
  speech.voice = voices[3];

};

// start speech
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

// wait function as existing javascript wait function was problematic 
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

// speak from user input
function speak(num) {

  //wait 2.5 seconds to wait for ding.mp3
  wait(2500);

  speech.text = num;
  window.speechSynthesis.speak(speech);
}
