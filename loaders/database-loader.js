// The purpose of this loader is to verify the connection to firebase
const databaseConnection = require('../models/database/firebase-connection');
module.exports = () => ({
  initializeConnection: () => databaseConnection(),
});
