const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year-desing').innerHTML += currentYear;

const lastModification = document.querySelector('#last-modification-desing');
lastModification.textContent += document.lastModified;