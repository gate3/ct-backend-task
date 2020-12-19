const Joi = require('joi');

const requiredStringRule = Joi.string().required();
// This line provides an error message for when a variable isn't set
const getVariableNotFoundErrorMessage = property => new Error(`${property} - was not found in the environment variables.`);

module.exports = () => {
    const schema = Joi.object({
        FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY: requiredStringRule.error(getVariableNotFoundErrorMessage('FIREBASE_SERVICE_ACCOUNT_BASE_64_KEY')),
        FIREBASE_DATABASE_URL: requiredStringRule.error(getVariableNotFoundErrorMessage('FIREBASE_DATABASE_URL')),
    }).unknown(true);

    return schema.validateAsync(process.env)
};

