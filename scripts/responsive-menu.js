// Get references to the menu elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add a click event listener to the hamburger button
menuToggle.addEventListener('click', function () {
  // Toggle the visibility of the menu
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});