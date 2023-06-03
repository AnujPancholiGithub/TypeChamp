if (process.env.NODE_ENV !== "production") {
  console.error("Server Using DotEnv()");
  require("dotenv").config();
}

const express = require("express");
const mongoConnect = require("./configs/db");

mongoConnect();
const app = express();

app.get("/", (req, res) => {
  res.send("Ram ram ji");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started On:", PORT, "PORT");
});
