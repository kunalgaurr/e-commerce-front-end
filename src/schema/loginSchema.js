import * as yup from 'yup';

const passwordRegex = /^(?=.*[A-Z])[ -~]{8,}$/;

export const loginSchema = yup.object().shape({
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
});
