import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { useSelector, useDispatch } from "react-redux";
import { GET_USER_DETAILS } from "../../redux/UserDetails/userDetailsTypes";
import { reuseDispatch } from "../../dispatchFunction";
import getUserDetails from "../../redux/UserDetails/userDetailsAction";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .min(2, "Email must be at least 2 characters")
    .max(50, "Email must not exceed 50 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Index(props) {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (credentials) => {
    try {
      setisLoading(true);
      // Call your login API here
      const response = await fetch("http://localhost:5000/api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.status === 200) {
        // Call function to get user details upon successful login
        getUserDetailsData({ email: credentials.email });
        setisLoading(false);
      } else {
        console.error("Login failed");
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setisLoading(false);
    }
  };

  const getUserDetailsData = async (data) => {
    try {
      setisLoading(true);
      // Call your get user details API here
      const response = await fetch("http://localhost:5000/api/getUserDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const userDetails = await response.json();
        console.log(userDetails, "userDetails");
        // dispatch({ type: GET_USER_DETAILS, payload: userDetails });
        dispatch(reuseDispatch(GET_USER_DETAILS, userDetails));
        navigate("/");
        setisLoading(false);
      } else {
        console.error("Failed to fetch user details");
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setisLoading(false);
    }
  };
  return (
    <div className="page-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Handle form submission
          loginUser(values);
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
            {isLoading && <Loader />}
            <div>
              <h1>Sign In</h1>
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
              <Button color="secondary" type="submit">
                <IconButton aria-label="fingerprint" color="secondary">
                  Sign In <Fingerprint />
                </IconButton>
              </Button>
              {/* <Link to="/register" underline="none">
                <Button variant="outlined" startIcon={<PersonAdd />}>
                  Sign Up
                </Button>
              </Link> */}
              <Link to="/register" underline="none">
                <div className="form-actions">
                  <a href="/forgot-password">Sign Up</a>
                </div>
              </Link>
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
