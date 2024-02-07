import { Grid } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <Grid container className="Footer">
        <Grid xs={4} ms={4} lg={4}>
          <div className="footer-icons">
            <HomeIcon color="action" fontSize="medium" />
            <p>
              <Link to="/" className="footer-icons-name">
                Home
              </Link>
            </p>
          </div>
          <div className="footer-icons">
            <InfoIcon color="action" fontSize="medium" />
            <Link to="/about" className="footer-icons-name">
              About
            </Link>
          </div>
          <div className="footer-icons">
            <ContactsIcon color="action" fontSize="medium" />
            <p>
              <Link to="/contact" className="footer-icons-name">
                Contact
              </Link>
            </p>
          </div>
        </Grid>
        <Grid xs={4} ms={4} lg={4} className="footer-personal-info">
          <div>
            <h3>Personal Information</h3>
            Email :{" "}
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
            >
              Demo@gmail.com
            </a>
            <p>Phone : +91 9999999999</p>
            {/* <p>Contact me</p> */}
          </div>
        </Grid>
        <Grid>
          <Grid xs={4} ms={3} lg={4}>
              <p>Address: <br/> -----------------------------------------------------------------------.</p>
          </Grid>
        </Grid>
      </Grid>
      <div className="footer-copyright">
        Copyright@2024. Designed and Developed by Bhuvan Teja
      </div>
      <Outlet />
    </div>
  );
};

export default Footer;
