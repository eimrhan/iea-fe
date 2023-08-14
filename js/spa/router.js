let root = document.getElementById("root")
let routeElements = document.querySelectorAll("*[data-route]")

routeElements.forEach(element => {
	element.onclick = router
});

function router(e) {
	let route = e.target.dataset.route

	if(route === "/") {
		setHomePage()
	} else if(route === "/abilities") {
		setAbilitiesPage()
	} else if(route === "/contact") {
		setContactPage()
	} else {
		set404Page()
	}
}