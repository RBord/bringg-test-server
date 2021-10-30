const express = require("express")
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.static("public"))
app.use(cors())
app.use(express.json())

app.use("/people", require("./routes/people"))
app.use("/planets", require("./routes/planets"))

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err
  res.status(status).json({ message })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`)
})
