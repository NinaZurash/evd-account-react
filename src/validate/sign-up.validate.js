import { string, object, ref } from "yup";

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
  name: {
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    errorMessage:
      "Name should only contain letters and may include apostrophes, commas, periods, hyphens, and spaces",
    requiredText: "Please Enter your Name",
  },
};

export const SignUpSchema = object({
  email: string()
    .matches(Validation.email.regex, Validation.email.errorMessage)
    .required(Validation.email.requiredText),
  password: string()
    .matches(Validation.password.regex, Validation.password.errorMessage)
    .required(Validation.password.requiredText),
  confirmPassword: string().oneOf([ref("password"), null], "Passwords must match"),
  firstName: string()
    .matches(Validation.name.regex, Validation.name.errorMessage)
    .min(2, "must be minimum 2 characters")
    .max(20, "must be maximum 20 characters")
    .required("Please Enter your First Name"),
  lastName: string()
    .matches(Validation.name.regex, Validation.name.errorMessage)
    .min(2, "must be minimum 2 characters")
    .max(20, "must be maximum 20 characters")
    .required("Please Enter your Last Name"),
}).required();
