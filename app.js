// app.js
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("App is Running"));
app.get("/ping", (req, res) => res.send("Pong Pong"));
app.get("/pong", (req, res) => res.send("Ping Pong"));

module.exports = app;