const express = require('express');
const request = require('request');
const cors = require('cors');
const { API_HEADER, API_KEY, URL } = require('./keys');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/:id', (req, res, next) => {
  var options = {
    method: 'GET',
    url: URL(req.params.id),
    headers: {
      API_HEADER: API_KEY,
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.status(200).json(JSON.parse(response.body));
  });
});

app.listen(3001, () => {
  console.log('express server on port ', 3001);
});
