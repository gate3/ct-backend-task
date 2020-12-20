const awilix = require('awilix');
const container = awilix.createContainer();
const database = require('./models/database/firebase-connection');
const databaseHelper = require('./models/database/firebase-helper');

container.loadModules([
  // This pattern helps automatically load repositories into the DI container
  [
    './**/*-repository.js',
  ],
  // This pattern loads validation functions used in validating user data
  [
    './**/*-validator.js',
  ],
  // This pattern loads service functions that contains business logic
  [
    './**/*-service.js',
  ],
], {
  cwd: __dirname,
  formatName: 'camelCase',
});


container.register({
  database: awilix.asValue(database()),
  databaseHelper: awilix.asClass(databaseHelper),
});

module.exports = {
  container,
  cradle: container.cradle,
};
