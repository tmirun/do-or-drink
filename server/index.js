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

app.get('/downloadJson', (req, res ) => {
  var data = JSON.stringify(state);
  res.setHeader('Content-disposition', 'attachment; filename=state.json');
  res.setHeader('Content-type', 'application/json');
  res.write(data, function (err) {
      res.end();}
  )
})

app.listen(port, () => console.log(`listening on port: ${port}!`))