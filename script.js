const hamburgerButton = document.getElementById('hamburger-btn');
const hamburgerMenu = document.getElementById('menu')

hamburgerButton.addEventListener('click', function() {
	hamburgerMenu.classList.toggle('hidden');
	hamburgerButton.classList.toggle('open');
})

// Dark Mode
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
	if (darkToggle.checked) {
		html.classList.add('dark');
	} else {
		html.classList.remove('dark');
	}
});

window.addEventListener('DOMContentLoaded', function() {
	darkToggle.checked = false;
})

const body = document.querySelector('body');
if (body.classList.contains('dark:bg-slate-800')) {
	body.style.backgroundImage = 'none';
}