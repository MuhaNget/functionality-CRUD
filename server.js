const express = require("express");
const db = require("./models")
const morgan = require("morgan")

const app = express();

app.use(express.json())
app.use(morgan("dev"));


db.sequelize.authenticate().then(() => console.log("Connected to DB successfully")).catch(error => console.log(error.message))

app.listen(9000, () => console.log("Server running on port 9000"))

// Routes
app.use("/api/v1/user", require("./routes/user"))