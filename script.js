function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function playHoverSound() {
  var audio = new Audio("hover-sound.mp3");
  audio.play();
}
function playButtonClickSound() {
  var audio = new Audio("vine-boom.mp3");
  audio.play();
}
function playButtonClickSound(audioFileName) {
  var audio = new Audio(audioFileName);

  audio.play();
}
