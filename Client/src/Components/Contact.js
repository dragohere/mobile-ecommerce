import React, { useState } from "react";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Loader from "./Loader";
import axios from "axios";


function Contact(props) {
  const [isLoader, setIsLoader] = useState(false);
 
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // const axios = require('axios');
        try {
          setIsLoader(true);
          await axios.post('https://formspree.io/f/xeqyqbjg', values);
          setSubmitting(false);
          setIsLoader(false);
          resetForm();
          alert("Thank You!");
        } catch (error) {
          setSubmitting(false);
          alert(error);
        }
      }}
    >
      {({ values, errors, handleChange, resetForm, handleSubmit, isSubmitting, handleBlur}) => (
        <form
          onSubmit={handleSubmit}
        >
          {isLoader && <Loader />}
          <div className="Contact-page">
            <div className="container">
              <h2>Contact</h2>
              <div className="contact-fields">
                <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter First Name"
                  required
                  value={values.firstName}
                  onChange={handleChange}
                  fullWidth
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  fullWidth
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <TextField
                  type="text"
                  name="company"
                  label="Company Name"
                  placeholder="Enter Company Name"
                  variant="outlined"
                  value={values.company}
                  onChange={handleChange}
                  required
                  fullWidth
                  onBlur={handleBlur}
                />
              </div>
              {/* <div>
              <textarea
              name="description"
              label="Description"
              value={values?.description}
              rows={4}
              style={{ width: '100%', boxSizing: 'border-box', margin: '0 0 0 10px' }}
              />
            </div> */}
              <div>
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <TextField
                  type="tel"
                  name="phone"
                  label="Phone (optional)"
                  placeholder="Enter Phone"
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  // required
                  fullWidth
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <TextField
                  name="message"
                  label="Message"
                  placeholder="Enter Message"
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  onBlur={handleBlur}
                  // style={inputStyle}
                />
              </div>
              <Button type="submit" className="submit-button" disabled={isSubmitting} fullWidth>
                Submit
                <IconButton aria-label="fingerprint" color="secondary">
                  <Fingerprint />
                </IconButton>
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Contact;
