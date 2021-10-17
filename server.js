const express = require('express');
const request = require('request');
const cors = require('cors');
const keys = require('./keys');
const app = express();

app.use(express.json());
app.use(cors());


app.listen(3001, () => {
    console.log('express server on port ', 3001);
   });
   