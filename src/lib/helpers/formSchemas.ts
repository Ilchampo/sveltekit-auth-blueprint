import * as yup from "yup";

export const signInFormSchema = yup.object({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

export const signUpFormSchema = yup.object({
  firstName: yup.string().required("Please enter a valid first name"),
  lastName: yup.string().required("Please enter a valid last name"),
  email: yup.string().email().required("Please enter a valid email"),
  password: yup
    .string()
    .min(10)
    .max(32)
    .required("Please enter a valid password"),
});

export const recoverPasswordFormSchema = yup.object({
  email: yup.string().email().required("Please enter your email"),
});

export const changePasswordFormSchema = yup.object({
  newPassword: yup.string().required(),
  confirmPassword: yup.string().required(),
});
