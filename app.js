
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');

app.get('/multipage/retire', (req, res) => {

  const age = req.query.age;
  const name = req.query.name;

  let yearsToRetire = 62 - age;
  let retireYear = new Date().getFullYear() + yearsToRetire;

  const data = {
    name,
    yearsToRetire,
    retireYear
  };

  res.render('index', data);
});

app.get('/singlepage/retire', (req, res) => {

  const age = req.query.age;
  const name = req.query.name;

  let yearsToRetire = 62 - age;
  let retireYear = new Date().getFullYear() + yearsToRetire;

  const data = {
    name,
    yearsToRetire,
    retireYear
  };

  res.json(data).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});