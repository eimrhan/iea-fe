const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())

let todos = []

app.get("/api/getTodoList", (req, res) => {
	res.json(todos)
})

app.post("/api/addTodo", (req, res) => {
	const {todo} = req.body
	todos.push({todo: todo, isCompleted: false})

	res.json({message: "Ekleme Başarılı."})
})

app.post("/api/completeTodo", (req, res) => {
	const {index} = req.body
	todos[index].isCompleted = true

	res.json({message: "Görev Tamamlandı."})
})

app.post("/api/deleteTodo", (req, res) => {
	const {index} = req.body
	todos.splice(index,1)

	res.json({message: "Görev Silindi."})
})

app.listen(5000, () => {console.log("Api 5000 portunda çalışıyor.")})