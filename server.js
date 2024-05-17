// server.js
const app = require("./app");

const port = 3000;

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is Running on ${port}`);
  } else {
    console.log("Server is Error");
  }
});
