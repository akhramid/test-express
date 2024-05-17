const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("App is Running"));
app.get("/ping", (req, res) => res.send("Pong"));
app.get("/pong", (req, res) => res.send("Ping Pong"));

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is Running on ${port}`);
  } else {
    console.log("Server is Error");
  }
});
