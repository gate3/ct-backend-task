const express = require('express');
const {middlewareList} = require('./config')
const indexRouter = require('./routes/index');

const app = express();

app.use(middlewareList);

app.use('/', indexRouter);

module.exports = app;
