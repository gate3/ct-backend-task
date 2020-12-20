const firebaseAdmin = require('firebase-admin');
const {envConfig} = require('../../config/env-variables');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
      envConfig.firebaseServiceAccountKey,
  ),
  databaseURL: envConfig.firebaseDatabaseUrl,
});

module.exports = () => firebaseAdmin.database();
