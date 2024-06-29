// Dependencies
const app = require("./app")

// Configuration
require("dotenv").config()
const PORT = process.env.PORT

// Listen to Port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})