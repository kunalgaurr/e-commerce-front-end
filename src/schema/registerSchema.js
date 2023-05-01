import * as yup from 'yup';

const passwordRegex = /^(?=.*[A-Z])[ -~]{8,}$/;

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid Email')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(passwordRegex, {
      message:
        'Please create a valid password with atleast on uppercase character',
    })
    .min(8, 'Password should be of atleast 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Please confirm your password.'),
});
