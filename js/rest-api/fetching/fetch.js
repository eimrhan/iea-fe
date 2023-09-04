fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => {
	data.forEach(todo => {
		const tr = document.createElement("tr")

		const idCell = document.createElement("td")
		idCell.innerText = todo.id

		const titleCell = document.createElement("td")
		titleCell.innerText = todo.title

		const completedCell = document.createElement("td")
		completedCell.innerText = todo.completed

		tr.appendChild(idCell)
		tr.appendChild(titleCell)
		tr.appendChild(completedCell)
		tbodyEl.appendChild(tr)
	})
})