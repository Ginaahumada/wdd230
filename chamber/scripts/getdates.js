const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year').innerHTML += currentYear;

const lastModification = document.querySelector('#last-modification');
lastModification.textContent += document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#dark");
const body = document.body;
const header = document.querySelector("header"); 
const section = document.querySelectorAll("section"); 
const links = document.querySelectorAll("li a"); 
const sectLink = document.querySelectorAll("section a"); 


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.backgroundColor = "#000"; 

		header.style.color = "#fff"; 

		section.forEach(section => {
		section.style.backgroundColor = "#277391"; 
		section.style.color = "#fff"; 
		})

		sectLink.forEach(section => {
			section.style.color = "#fff"; 
			})

		links.forEach(link => {
			link.style.color = "#fff";
		});

		modeButton.textContent = "👓";
	} else {
		body.style.backgroundColor = "white"; 
		header.style.color = "#000"; 
		body.style.backgroundColor = "white"; 
		section.forEach(section => {
			section.style.backgroundColor = "#e67777"; 
			section.style.color = "#000"; 
			})
		
		links.forEach(link => {
			link.style.color = "black";
		});
		sectLink.forEach(section => {
			section.style.color = "#081349"; 
			})

		modeButton.textContent = "🕶️";
	}
});

// ___________

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("visits");
    const storageKey = "lastVisitTimestamp";

    if (localStorage.getItem(storageKey)) {
        const lastVisitTimestamp = parseInt(localStorage.getItem(storageKey));
        const currentTime = Date.now();
        const timeDifference = currentTime - lastVisitTimestamp;
        const oneDayInMilliseconds = 84600000; 
        const daysSinceLastVisit = Math.floor(timeDifference / oneDayInMilliseconds);

        if (daysSinceLastVisit < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            const pluralize = daysSinceLastVisit === 1 ? "day" : "days";
            sidebar.textContent = `You last visited ${daysSinceLastVisit} ${pluralize} ago.`;
        }
    } else {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update the last visit timestamp in local storage
    localStorage.setItem(storageKey, Date.now().toString());
});