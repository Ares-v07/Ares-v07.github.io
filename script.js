function scrollProjects(direction) {

    const container = document.getElementById("projectsContainer");

    const card = container.querySelector(".form-box");

    if (!card) {
        return;
    }

    const gap = 40;

    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({

        left: direction * cardWidth,

        behavior: "smooth"

    });

}