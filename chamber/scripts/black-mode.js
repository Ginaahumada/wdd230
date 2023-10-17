const modeButton = document.querySelector("#mode");
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