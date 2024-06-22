// ======================= BY USING TS ======================= //

import Joi, { ObjectSchema, ValidationResult } from "joi";

interface Validator<T> {
  (payload: T): ValidationResult;
}

const validator =
  <T>(scheme: ObjectSchema): Validator<T> =>
  (payload: T) =>
    scheme.validate(payload, { abortEarly: false });

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(3).max(10).required(),
});

export const validateSignin = validator(signinSchema);

// ======================= WITHOUT TS ======================= //

/*const Joi = require("joi");

const validator = (scheme) => (payload) =>
  scheme.validate(payload, { abortEarly: false });

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(3).max(10).required(),
});

exports.validateSignin = validator(signinSchema);*/
