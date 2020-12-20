const databaseLoader = require('./database-loader');

module.exports = async ({debug}) => {
  databaseLoader().initializeConnection();
  debug('Database connection established 👍');
};
