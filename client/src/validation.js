import { body } from "express-validator";

// Validation rules for signup
export const signupValidationRules = () => {
  return [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};

// Validation rules for login
export const loginValidationRules = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
};

// Validation rules for password reset
export const resetPasswordValidationRules = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
  ];
};

// Validation rules for profile update
export const profileUpdateValidationRules = () => {
  return [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("gender").notEmpty().withMessage("Gender is required"),
    body("age")
      .notEmpty()
      .withMessage("Age is required")
      .isNumeric()
      .withMessage("Age must be a number"),
    body("dateOfBirth").notEmpty().withMessage("Date of birth is required"),
    body("maritalStatus")
      .notEmpty()
      .withMessage("Marital status is required")
      .isIn(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"])
      .withMessage("Invalid marital status"),
    body("nationality").notEmpty().withMessage("Nationality is required"),
  ];
};
