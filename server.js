const express = require('express');

const PORT = 3001;

const app = express();

app.get('/api/reviews', (req, res) => {
  // console.info('Get requet established');
  res.json(`${req.method} request recieved to get reviews`);
});

app.post('/api/reviews', (req, res) => {
  // console.info(req.body);
  res.json(`${req.method} request recieved to get reviews`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
