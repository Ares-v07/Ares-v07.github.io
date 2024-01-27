function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function playHoverSound() {
  var audio = new Audio("hover-sound.mp3");
  audio.play();
}
