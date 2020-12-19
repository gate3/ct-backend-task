const Joi = require('joi');
const {
    FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY,
    FIREBASE_DATABASE_URL
} = process.env;

const requiredStringRule = Joi.string().required();
// This line provides an error message for when a variable isn't set
const getVariableNotFoundErrorMessage = property => new Error(`${property} - was not found in the environment variables.`);

module.exports = async () => {
    const schema = Joi.object({
        FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY: requiredStringRule.error(getVariableNotFoundErrorMessage('FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY')),
        FIREBASE_DATABASE_URL: requiredStringRule.error(getVariableNotFoundErrorMessage('FIREBASE_DATABASE_URL')),
    }).unknown(true);

    await schema.validateAsync(process.env);

    return {
        firebaseServiceAccountBase64Key: FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY,
        firebaseDatabaseUrl: FIREBASE_DATABASE_URL
    }
};

