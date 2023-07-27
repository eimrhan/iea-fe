const hamburgerEl = document.querySelector('.hamburger');
const ulEl = document.querySelector('nav ul')

hamburgerEl.addEventListener('click', () => {
	hamburgerEl.classList.toggle('active');
	ulEl.classList.toggle('active');
})