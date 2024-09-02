import * as yup from 'yup';

export const signInFormSchema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password cannot be longer than 32 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[^\s]{8,32}$/,
      'Password must contain at least one uppercase letter, one number, and one special character',
    ),
});
export const signUpFormSchema = yup.object({
  firstName: yup.string().required('Please enter a valid first name'),
  lastName: yup.string().required('Please enter a valid last name'),
  email: yup.string().email().required('Please enter a valid email'),
  password: yup
    .string()
    .min(10)
    .max(32)
    .required('Please enter a valid password'),
});

export const recoverPasswordFormSchema = yup.object({
  email: yup.string().email().required('Please enter your email'),
});

export const changePasswordFormSchema = yup.object({
  newPassword: yup.string().required(),
  confirmPassword: yup.string().required(),
});
