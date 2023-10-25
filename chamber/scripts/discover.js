document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; 

    if (!lastVisit) {
        document.querySelector(".sidebar").textContent = "¡Bienvenido! Háganos saber si tiene alguna pregunta.";
    } else {
        const daysSinceVisit = Math.round((currentDate - lastVisit) / oneDay);

        if (daysSinceVisit === 1) {
            document.querySelector(".sidebar").textContent = "Visits: ";
        } else {
            document.querySelector(".sidebar").textContent = `Visits: ${daysSinceVisit}`;
        }
    }

    localStorage.setItem("lastVisit", currentDate);
});

let imagesLoaded = false;

function loadImages() {
    if (!imagesLoaded) {
        // image
        imagesLoaded = true;
    }
}

window.addEventListener("scroll", loadImages);
