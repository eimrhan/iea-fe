const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
// ile apiye artık tüm adreslerden erişilebilir.

app.get("/api/getAll", (req, res) => {
	res.json({ message: "Api isteği yapıldı." })
})

app.listen(5000, () => {
	console.log("Api uygulaması 5000 portunda çalışıyor.")
})