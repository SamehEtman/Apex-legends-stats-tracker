const express = require('express');
const request = require('request');
const cors = require('cors');
const { API_KEY, URL } = require('./keys/keys');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/:id', (req, res, next) => {
  var options = {
    method: 'GET',
    url: URL + req.params.id + `/segments/legend`,
    headers: {
      'TRN-Api-Key': API_KEY,
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.status(200).json(JSON.parse(response.body));
  });
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(3001, () => {
  console.log('express server on port ', 3001);
});
