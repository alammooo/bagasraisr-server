const express = require("express")
const app = express()
const port = process.env.port || 3001
const router = require("./routes/router")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log("Listening to port", port)
})
