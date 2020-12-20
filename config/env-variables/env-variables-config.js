const {
  FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY,
  FIREBASE_DATABASE_URL,
} = process.env;

module.exports = {
  firebaseServiceAccountKey: JSON.parse(
      Buffer.from(
          FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY, 'base64',
      ).toString('ascii')),
  firebaseDatabaseUrl: FIREBASE_DATABASE_URL,
};
