const awilix = require('awilix');
const container = awilix.createContainer();
const database = require('./models/database/firebase-connection');

container.loadModules([], {
  cwd: __dirname,
  formatName: 'camelCase',
});


container.register({
  database: awilix.asValue(database()),
});

module.exports = {
  container,
  cradle: container.cradle,
};
