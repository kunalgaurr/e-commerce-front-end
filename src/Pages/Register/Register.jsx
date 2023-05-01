import React, { useRef, useState } from 'react';
import './Register.css';
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/registerSchema';

export const Register = () => {
  const [firstNameToggle, setFirstNameToggle] = useState(false);
  const [lastNameToggle, setLastNameToggle] = useState(false);
  const [emailToggle, setEmailToggle] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
  });

  return (
    <div id="register-container">
      <div id="register-wrapper">
        <span id="register-header">Urban Buy</span>
        <span id="register-text">
          Create an account in urban buy and start shopping.
        </span>
        <form action="" id="register-form" onSubmit={handleSubmit}>
          <div id="register-name">
            <div>
              <label
                htmlFor="firstName"
                onClick={() => setFirstNameToggle(!firstNameToggle)}
              >
                <span
                  style={{
                    transform: firstNameToggle
                      ? 'translateY(-150%)'
                      : 'translateY(-50%)',
                    fontSize: firstNameToggle ? '10px' : '1rem',
                  }}
                >
                  First Name
                </span>
                <input
                  type="text"
                  name="firstName"
                  className="register-input"
                  ref={firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <p className="validation-message">
                {touched.firstName && errors.firstName ? errors.firstName : ''}
              </p>
            </div>
            <div>
              <label
                htmlFor="lastName"
                onClick={() => setLastNameToggle(!lastNameToggle)}
              >
                <span
                  style={{
                    transform: lastNameToggle
                      ? 'translateY(-150%)'
                      : 'translateY(-50%)',
                    fontSize: lastNameToggle ? '10px' : '1rem',
                  }}
                >
                  Last Name
                </span>
                <input
                  type="text"
                  name="lastName"
                  className="register-input"
                  ref={lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <p className="validation-message">
                {touched.lastName && errors.lastName ? errors.lastName : ''}
              </p>
            </div>
          </div>
          <label htmlFor="email" onClick={() => setEmailToggle(!emailToggle)}>
            <span
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
              name="email"
              className="register-input"
              ref={email}
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
            onClick={() => setPasswordToggle(!passwordToggle)}
          >
            <span
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
              name="password"
              className="register-input"
              ref={password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <p className="validation-message">
            {touched.password && errors.password ? errors.password : ''}
          </p>

          <label
            htmlFor="confirmPassword"
            onClick={() => setConfirmPasswordToggle(!confirmPasswordToggle)}
          >
            <span
              style={{
                transform: confirmPasswordToggle
                  ? 'translateY(-150%)'
                  : 'translateY(-50%)',
                fontSize: confirmPasswordToggle ? '10px' : '1rem',
              }}
            >
              Confirm Password
            </span>
            <input
              type="password"
              name="confirmPassword"
              className="register-input"
              ref={confirmPassword}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <p className="validation-message">
            {touched.confirmPassword && errors.confirmPassword
              ? errors.confirmPassword
              : ''}
          </p>
          <button type="submit" id="signup-button" disabled={isSubmitting}>
            Sign up
          </button>
          <hr />
          <button id="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};
