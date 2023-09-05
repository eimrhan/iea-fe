const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())

let todos = [
	"todo1",
	"todo2",
	"todo3"
]

app.get("/api/getTodoList", (req, res) => {
	res.json(todos)
})

app.post("/api/add", (req, res) => {
	const {todo} = req.body
	todos.push(todo)

	res.json({message: "Ekleme Başarılı"})
})

app.listen(5000, () => {console.log("Api 5000 portunda çalışıyor.")})