import React from "react";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar(props) {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  const [sideBar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };
  const cartItemList = useSelector((state) => state.cartState);
  const cartLength = cartItemList?.length === 1 ? 1 : cartItemList?.length;
  return (
    <>
      {isLoading && <Loader />}
      <div className="navbar">
        <Link to="/">
          <h1>Mobiles</h1>
        </Link>
        <div className="navbar-context">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartLength} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
          <li className="avatar-dropdown">
            {isAuthenticated ? (
              <Link to="">
                <Avatar
                  alt="Travis Howard"
                  src={user?.picture}
                  // src="https://media.licdn.com/dms/image/D5603AQEy1aTMMU6naw/profile-displayphoto-shrink_800_800/0/1665038963588?e=2147483647&v=beta&t=2__iMRFbYTMjomR6huuDnh5z3bkbvMuXESE9ThId3FU"
                />
              </Link>
            ) : (
              <Avatar src="/broken-image.jpg" />
            )}
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/support">Support</Link>
              <Link to="/register">Register</Link>
              {isAuthenticated ? (
                <Link
                  to=""
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Sign Out
                </Link>
              ) : (
                <Link to="" onClick={() => loginWithRedirect()}>
                  Sign in
                </Link>
              )}
            </div>
          </li>
        </div>
        <div className="menu-bar" onClick={toggleSidebar}>
          {sideBar ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
      <div className={`side-bar ${sideBar ? "open" : ""}`}>
        <li onClick={closeSideBar}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/shop">Shop</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/cart">Cart</Link>
        </li>
        {isAuthenticated ? (
          <li
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }
          >
            Sign Out
          </li>
        ) : (
          <li onClick={() => loginWithRedirect()}>
            Sign in
          </li>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
