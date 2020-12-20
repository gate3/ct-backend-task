const Joi = require('joi');
/**
 * Joi does not have a built in phone number validation rule.
 * So this npm package from SalesFire provides that as an extension.
 * https://www.npmjs.com/package/joi-phone-number
 */
const JoiExtended = Joi.extend(require('joi-phone-number'));

/**
 * This closure is how the dependency injection library injects into the function.
 * The outer function will be used by the DI tool,
 * while the second function is the validator.
 * @return {Function}
 */
module.exports = () => (data) => {
  const address = Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
    street: Joi.string().required(),
    zip: Joi.number().required(),
  });
  const customer = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    phone: JoiExtended.string().phoneNumber(),
    // Joi.string().length(14).regex(/^\d+$/),
  });
  const schema = Joi.object({
    address,
    bookingDate: Joi.date().timestamp(),
    customer,
    title: Joi.string().required(),
  });

  return schema.validateAsync(data);
};
