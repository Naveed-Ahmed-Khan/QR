/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [activeTab, setActiveTab] = useState(props.active);
  /* const [loginPopup, setLoginPopup] = useState(false); */

  const handleTab = (e, tabName) => {
    setActiveTab(tabName);
  };

  /*   const hanldeLoginPop = (e) => {
    e.preventDefault();
    setLoginPopup(!loginPopup);
  }; */

  return (
    <div className="header-main" style={{ display: "absolute", zIndex: "5" }}>
      {/* Top Bar */}
      {/* <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-8 col-5">
              <div className="top-bar-right">
                <ul className="custom">
                  <li>
                    <Link to="/register" className="text-dark">
                      <i className="fa fa-user me-1" /> <span>Register</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-dark"
  
                    >
                      <i className="fa fa-sign-in me-1" /> <span>Login</span>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="text-dark" data-bs-toggle="dropdown">
                      <i className="fa fa-home me-1" />
                      <span> My Dashboard</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <a href="mydash.html" className="dropdown-item">
                        <i className="dropdown-icon icon icon-user" /> My
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-speech" /> Inbox
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-bell" />{" "}
                        Notifications
                      </a>
                      <a href="mydash.html" className="dropdown-item">
                        <i className="dropdown-icon  icon icon-settings" />{" "}
                        Account Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-power" /> Log out
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Top Bar */}

      {/* Mobile Header */}
      <div id="sticky-wrapper" className="sticky-wrapper">
        <div className="horizontal-header clearfix">
          <div className="container">
            <a id="horizontal-navtoggle" className="animated-arrow">
              <span />
            </a>
            <span className="smllogo">
              <img
                className="mobile-light-logo"
                src="../assets/images/brand/newLogo.png"
                alt=""
                height="100%"
              />
              <img
                className="mobile-dark-logo"
                src="../assets/images/brand/newLogo.png"
                alt=""
                height="100%"
              />
            </span>
            <a href="tel:245-6325-3256" className="callusbtn">
              <i className="fa fa-phone" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* /Mobile Header */}
      <div id="sticky-wrapper" className="sticky-wrapper">
        <div className="horizontal-main ">
          <div className="horizontal-mainwrapper container ">
            <div className="desktoplogo" style={{ height: 87 }}>
              <Link to="/">
                <img
                  style={{
                    display: "inline-block",
                    width: "42px",
                    height: "54px",
                    margin: "0 1rem 0 0",
                    padding: "0 0 15px 0",
                  }}
                  src="../assets/images/brand/Logo_QR_2.png"
                  alt=""
                  height="100%"
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "22px",
                  }}
                >
                  QR it Now
                </span>
              </Link>
            </div>

            <div className="desktoplogo-1" style={{ height: 87 }}>
              <a href="index.html">
                <img
                  src="../assets/images/brand/image.png"
                  alt=""
                  height="100%"
                />
              </a>
            </div>
            {/*Nav*/}

            <nav className="horizontalMenu clearfix d-md-flex">
              <ul className="horizontalMenu-list">
                <li aria-haspopup="true">
                  <Link
                    to="/"
                    className={activeTab === "Home" ? "active" : ""}
                    onClick={(e) => handleTab(e, "Home")}
                    style={
                      activeTab === "Home"
                        ? { marginRight: "10px", color: "white" }
                        : {
                            marginRight: "10px",
                            color: "#1cb56d",
                          }
                    }
                  >
                    Home
                  </Link>
                </li>
                <li aria-haspopup="true">
                  <Link
                    to="/login"
                    className={activeTab === "login" ? "active" : ""}
                    onClick={(e) => handleTab(e, "login")}
                    /* style={{ border: "2px solid #1CB56D" }} */
                    style={
                      activeTab === "Home"
                        ? { marginRight: "10px", color: "white" }
                        : {
                            marginRight: "10px",
                            color: "#1cb56d",
                          }
                    }
                  >
                    Login
                  </Link>
                </li>
                {/* <li aria-haspopup="true">
                  <Link to="/classifieds">Feedback</Link>
                </li> */}
                {/*   <li aria-haspopup="true">
                  <a href="classifieds-list.html">Language</a>
                </li>
                <li aria-haspopup="true">
                  <a href="contact.html">
                    Rate us
                    <span className="wsarrow" />
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a href="contact.html">
                    Share App
                    <span className="wsarrow" />
                  </a>
                </li>
                <li aria-haspopup="true">
                  <Link
                    to="/create-qr"
                    className="btn btn-warning"
                    onClick={(e) => handleTab(e, "create-qr")}
                  >
                    Create QR Code
                    <span className="wsarrow" />
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/*Nav*/}
      {/*  {loginPopup ? <Signin open={loginPopup} close={hanldeLoginPop} /> : null} */}
    </div>
  );
};

export default Header;
