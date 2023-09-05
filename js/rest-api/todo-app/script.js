// import axios from "axios"

const inputEl = document.querySelector("#todo")
const ulEl = document.querySelector("ul")

const add = (e) => {
	e.preventDefault()

	let body = {todo: inputEl.value}

	//! Fetch 
	/*
 	fetch("http://localhost:5000/api/add", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json"
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data.message)
		getTodoList()
		inputEl.value = ""
		inputEl.focus()
	}) */

	//! Axios
	axios.post("http://localhost:5000/api/add", body)
		.then(res => {
			console.log(res.data.message)
			getTodoList()
			inputEl.value = ""
			inputEl.focus()
		})
}

const getTodoList = () => {
	fetch("http://localhost:5000/api/getTodoList")
	.then(res => res.json())
	.then(data => {
		ulEl.innerHTML = ""

		data.forEach(element => {
			let liEl = document.createElement("li")
			liEl.innerText = element
			ulEl.appendChild(liEl)
		});
	})
}

getTodoList()