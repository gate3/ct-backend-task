const awilix = require('awilix');
const container = awilix.createContainer();
const database = require('./models/database/firebase-connection');
const databaseHelper = require('./models/database/firebase-helper');

container.loadModules([], {
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
