const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.options('*', cors());

const port = 3100

let state = {};

app.get('/state', (req, res) => {
  res.json(state);
})

app.post('/state', (req, res) => {
  state = req.body;
  console.log(state)
  res.json(state);
})

app.listen(port, () => console.log(`listening on port: ${port}!`))