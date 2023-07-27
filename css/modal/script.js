const modalEl = document.querySelector('.modal')
const buttonEl = document.querySelector('#open-modal')
const closeEl = document.querySelector('.close')

buttonEl.onclick = () => {
	modalEl.style.display = "block";
}

closeEl.onclick = () => {
	modalEl.style.display = "none";
}

window.onclick = (e) => {
	if(e.target == modalEl) {
		modalEl.style.display = "none";
	}
}