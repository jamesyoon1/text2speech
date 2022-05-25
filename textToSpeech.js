const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const input = urlParams.get('input');
window.alert(input);


   
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

//get voices
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
   
   speech.text = input;
window.speechSynthesis.speak(speech);
};

// change voice, Korean option available
document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

// start speech
document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});


