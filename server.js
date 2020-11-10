const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 8080;
const authMiddleware = require("./middlewares/authMiddleware");
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(volleyball);
app.use(express.json());

// Notes
app.use("/api/notes", authMiddleware, require("./api/routes/notes"));

// Users
app.use("/api/users", require("./api/routes/users"));

app.get("/hello", async (req, res) => {
  res.json({
    message: "hello, world",
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
