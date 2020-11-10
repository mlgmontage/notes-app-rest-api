const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 8080;
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(volleyball);
app.use(express.json());

app.get("/hello", async (req, res) => {
  res.json({
    message: "hello, world",
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));