document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    let currentYear = new Date().getFullYear();

    // Update the copyright year in the footer's first paragraph
    document.querySelector('footer p:first-child').innerHTML = `&copy; ${currentYear} <span id="currentYear"></span> Gina Ahumada`;

    // Get the last modified date of the document
    let lastModified = new Date(document.lastModified);

    // Get the element with the ID "lastModified"
    let lastModifiedElement = document.getElementById('lastModified');

    // Format the date to a readable string
    let formattedDate = lastModified.toLocaleString();

    // Update the element's content with the formatted date
    lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;
});