import { string, object } from "yup";

const Validation = {
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    errorMessage: "Please provide a valid email address",
    requiredText: "Email is required",
  },
  password: {
    regex:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`[\]{}\\|;:"'<>,.?/])[A-Za-z\d!@#$%^&*()_+~`[\]{}\\|;:"'<>,.?/]{8,30}$/,
    errorMessage:
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be between 8 and 30 characters long",
    requiredText: "Please Enter your password",
  },
};

export const SignInSchema = object({
  email: string()
    .matches(Validation.email.regex, Validation.email.errorMessage)
    .required(Validation.email.requiredText),
  password: string()
    .matches(Validation.password.regex, Validation.password.errorMessage)
    .required(Validation.password.requiredText),
}).required();
