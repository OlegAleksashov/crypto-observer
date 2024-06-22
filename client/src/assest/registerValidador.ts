// ======================= BY USING TS ======================= //

import Joi, { ObjectSchema, ValidationResult } from "joi";

interface Validator<T> {
  (payload: T): ValidationResult;
}

const validator =
  <T>(scheme: ObjectSchema): Validator<T> =>
  (payload: T) =>
    scheme.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(3).max(10).required(),
  confirmPassword: Joi.ref("password"),
});

export const validateRegister = validator(signupSchema);

// ======================= WITHOUT TS ======================= //

/*const Joi = require("joi");

const validator = (scheme) => (payload) =>
  scheme.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(3).max(10).required(),
  confirmPassword: Joi.ref("password"),
});

exports.validateRegister = validator(signupSchema);*/
