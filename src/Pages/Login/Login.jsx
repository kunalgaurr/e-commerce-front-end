import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import './Login.css';
import { loginSchema } from '../../schema/loginSchema';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [emailToggle, setEmailToggle] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);

  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  });
  return (
    <div id="login-container">
      <div id="login-wrapper">
        <span id="login-header">Urban Buy</span>
        <span id="login-text">
          Log into your urban buy account and start shopping.
        </span>
        <form action="" id="login-form" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            onClick={() => {
              setEmailToggle(!emailToggle);
            }}
          >
            <span
              id="email-label"
              style={{
                transform: emailToggle
                  ? 'translateY(-150%)'
                  : 'translateY(-50%)',
                fontSize: emailToggle ? '10px' : '1rem',
              }}
            >
              Email
            </span>
            <input
              type="email"
              id=""
              className="login-input"
              ref={email}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <p className="validation-message">
            {touched.email && errors.email ? errors.email : ''}
          </p>
          <label
            htmlFor="password"
            onClick={() => {
              setPasswordToggle(!passwordToggle);
            }}
          >
            <span
              id="password-label"
              style={{
                transform: passwordToggle
                  ? 'translateY(-150%)'
                  : 'translateY(-50%)',
                fontSize: passwordToggle ? '10px' : '1rem',
              }}
            >
              Password
            </span>
            <input
              type="password"
              id=""
              className="login-input"
              ref={password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <p className="validation-message">
            {touched.password && errors.password ? errors.password : ''}
          </p>
          <button type="submit" id="login-button" disabled={isSubmitting}>
            Log in
          </button>
          <span>Create an account</span>
          <button id="signup-button" onClick={() => navigate('/register')}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
