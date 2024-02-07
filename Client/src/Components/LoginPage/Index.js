import React from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';


const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(2, 'Username must be at least 2 characters')
      .max(50, 'Username must not exceed 50 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  });

function Index(props) {
  return (
    <div className="page-container">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
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
              <h1>Sign In</h1>
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
              <Button color="secondary">
                <IconButton aria-label="fingerprint" color="secondary">
                Sign In{" "}<Fingerprint />
                </IconButton>
              </Button>
              <div className="form-actions">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Index;
