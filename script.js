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
  // Créer un objet Audio et spécifier le chemin du fichier audio
  var audio = new Audio(audioFileName);

  // Jouer le son
  audio.play();
}
