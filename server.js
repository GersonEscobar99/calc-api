const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/health', (req, res) => res.send('ok'));

app.get('/sum', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos', a: req.query.a, b: req.query.b });
  }
  res.json({ result: a + b });
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body || {};
  const na = parseFloat(a), nb = parseFloat(b);
  if (Number.isNaN(na) || Number.isNaN(nb)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  res.json({ result: na + nb });
});

app.listen(port, () => console.log(`API listening on ${port}`));
