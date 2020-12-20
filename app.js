require('dotenv').config();
const express = require('express');
const {middlewareList} = require('./config');
const indexRouter = require('./routes/index');
const {validateEnvironmentVariables} = require('./config');
const debug = require('debug')('backend-task:server');
const loadAppConnections = require('./loaders');
const DI = require('./di-container');

module.exports = async () => {
  try {
    /*
        All important items to be loaded should be done here.
        If any of them can't be loaded the app will fail to start,
        and an error will be logged.
    */
    await validateEnvironmentVariables();
    debug('Environment variables validated 👍');
    await loadAppConnections({debug});
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  const app = express();

  app.use(middlewareList);

  app.use('/', indexRouter);

  return app;
};

