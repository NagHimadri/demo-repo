const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

//middlewarees
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("Hello world");
})

app.get('/route-handler', (req,res) => {
  res.json({
    name: "Harkirat",
    age: 21
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})