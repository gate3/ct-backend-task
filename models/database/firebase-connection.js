const firebaseAdmin = require('firebase-admin');
const {envConfig} = require('../../config/env-variables');
module.exports = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(
        envConfig.firebaseServiceAccountKey,
    ),
    databaseURL: envConfig.firebaseDatabaseUrl,
  });
  return firebaseAdmin.database();
};
