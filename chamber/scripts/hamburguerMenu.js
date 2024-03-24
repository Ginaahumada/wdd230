const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open'); // Toggle the 'open' class on the navigation element
    hamButton.classList.toggle('open'); // Toggle the 'open' class on the hamButton (menu button) itself
});