import React from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

function Index(props) {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          console.log(values,"valuesRegister")
          try {
            const response = await fetch('http://localhost:5000/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });

            if (!response.ok) {
              throw new Error('Error registering user');
            }

            // Handle successful registration (e.g., redirect or show message)
            console.log('Registration successful');
            navigate("/")
          } catch (error) {
            console.error(error.message);
            // Handle registration error (e.g., show error message)
          }
        }}
        validationSchema={validationSchema}
      >
        {({
          errors,
          setFieldValue,
          handleBlur,
          handleChange,
          handleReset,
          handleSubmit,
          values,
          touched,
        }) => (
          <form className="form-container" noValidate onSubmit={handleSubmit}>
            <div>
              <h1>Sign Up</h1>
              <div className="form-fields">
                <TextField
                  type="text"
                  name="firstName"
                  label="Username"
                  variant="outlined"
                  placeholder="Enter Username"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </div>
              <div className="form-fields">
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </div>
              <div className="form-fields">
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div className="form-fields">
                <TextField
                  type="text"
                  name="username"
                  label="Username"
                  variant="outlined"
                  placeholder="Enter Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </div>
              <div className="form-fields">
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
              <div className="form-fields">
                <TextField
                  type="password"
                  name="confirmPassword"
                  label="Confirm password"
                  variant="outlined"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </div>
              <Button type="submit" color="secondary">
                <IconButton aria-label="fingerprint" color="secondary">
                  Sign Up <Fingerprint />
                </IconButton>
              </Button>
              {/* <div className="form-actions">
                <a href="/forgot-password">Forgot Password?</a>
              </div> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Index;
