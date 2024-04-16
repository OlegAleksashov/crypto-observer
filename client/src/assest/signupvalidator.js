const Joi = require("joi");

const validator = (scheme) => (payload) =>
  scheme.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(3).max(10).required(),
});

exports.validateSignup = validator(signupSchema);
