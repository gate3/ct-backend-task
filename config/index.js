const middlewareList = require('./middleware');
const {validateEnvironmentVariables, envConfig} = require('./env-variables/');

module.exports = {
  middlewareList,
  envConfig,
  validateEnvironmentVariables,
};
