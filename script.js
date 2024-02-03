const hamburgerButton = document.getElementById('hamburger-btn');
const hamburgerMenu = document.getElementById('menu')

hamburgerButton.addEventListener('click', function() {
	hamburgerMenu.classList.toggle('hidden');
	hamburgerButton.classList.toggle('open');
})