// import axios from "axios"
// const { default: axios } = require("axios")

const inputEl = document.querySelector("#todo")
const tbodyEl = document.querySelector("tbody")

const getTodoList = () => {
	axios("http://localhost:5000/api/getTodoList")
	.then(res => {
		let data = res.data

		tbodyEl.innerHTML = ""

		for (const i in data) {
			let isCompletedText = data[i].isCompleted === true ? "Completed" : "in Progress"

			tbodyEl.innerHTML += `
				<tr>
					<td>${+i+1}</td>
					<td>${data[i].todo}</td>
					<td>${isCompletedText}</td>
					<td>${data[i].isCompleted
						? "" : `<button onclick='completeTodo(${i})'>Complete</button>`}
						<button onclick='deleteTodo(${i})'>Delete</button>
					</td>
				</tr>
			`
		}
	})
}

const addTodo = (e) => {
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
	axios.post("http://localhost:5000/api/addTodo", body)
	.then(res => {
		console.log(res.data.message)
		getTodoList()
		inputEl.value = ""
		inputEl.focus()
	})
}

const completeTodo = (i) => {
	let body = {index: i}

	axios.post("http://localhost:5000/api/completeTodo", body)
	.then(res => {
		console.log(res.data.message)
		getTodoList()
	})
}

const deleteTodo = (i) => {
	let body = {index: i}
	
	axios.post("http://localhost:5000/api/deleteTodo", body)
	.then(res => {
		console.log(res.data.message)
		getTodoList()
	})
}

getTodoList()