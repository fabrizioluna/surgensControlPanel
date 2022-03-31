// const createError = require('http-errors');
const express = require('express');
const { dbConnection } = require('./database');
const app = express();
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const axios = require('./utils/axios');

dbConnection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


axios.interceptors.request.use(req => {

  req.headers.authorization = `Bearer ${process.env.ACCESS_TOKEN_CR}`;
  req.headers.headers = {
    'Contet-Type': 'application/x-www-form-urlencoded'
  }

  return req;
});

app.use('/v1', router);

// cron.schedule('* * * * * *', () => {
//   console.log('Ejecutandose')
// })


module.exports = app;
