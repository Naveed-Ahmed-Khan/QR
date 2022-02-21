import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import { Link, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
import { logedinuser } from '../../APIs/api';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("MENU");
  const [altTab, setAltTab] = useState(false);
  const [menus, setMenus] = useState("");
  const [user, setuser] = useState({});
  const [error, seterror] = useState("");

  useEffect(async () => {

    await logedinuser({
      token: Cookies.get('token')
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res:", response.data)
          try {
            seterror("");
            setuser(response.data.user);

          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error)
        }

      })
      .catch(function (error) {
        console.log("error:", error.message)
      });

  }, [])
  
  const menuTabHandler = () => {
    setActiveTab("MENU");
  };
  const surveyTabHandler = () => {
    setActiveTab("SURVEY");
  };
  const qrTabHandler = () => {
    setActiveTab("QR");
  };

  return (
    <>
      <div className={classes.main} style={{ zIndex: "10" }}>
        <div className={classes.gridContainer}>
          <div className={`${classes.gridItem} ${classes.item1}`}>
            <div className={classes.myLogo}>
              <img
                style={{ objectFit: "contain" }}
                src="../assets/images/brand/Logo_QR_2.png"
                alt="logo"
              ></img>
              <h4>QR it Now</h4>
            </div>
            <Link
              className={
                activeTab === "MENU"
                  ? `${classes.sideItem} ${classes.activate}`
                  : `${classes.sideItem}`
              }
              to="/dashboard/menu"
              onClick={menuTabHandler}
            >
              <img
                className={classes.tabImage}
                src="../assets/images/brand/fastFood.png"
                alt="Food-item"
              />{" "}
              <span style={{ marginRight: "80px" }}> Menu</span>
            </Link>
            <Link
              className={
                activeTab === "SURVEY"
                  ? `${classes.sideItem} ${classes.activate}`
                  : `${classes.sideItem}`
              }
              to="/dashboard/survey"
              onClick={surveyTabHandler}
            >
              <img
                className={classes.tabImage}
                src="../assets/images/brand/survey.png"
                alt="Food-item"
              />
              <span>Survey</span>
            </Link>
            <Link
              className={
                activeTab === "QR"
                  ? `${classes.sideItem} ${classes.activate}`
                  : `${classes.sideItem}`
              }
              to="/dashboard/qr-codes"
              onClick={qrTabHandler}
            >
              <img
                className={classes.tabImage}
                src="../assets/images/brand/survey.png"
                alt="QR-code"
              />
              <span>QR Codes</span>
            </Link>
            <Link className={`${classes.sideItem} ${classes.side3}`}
              to="/login"
              onClick={() => {
                Cookies.remove('token')
                Cookies.remove('mail')
              }}
            >
              <img
                src="../assets/images/brand/logout.png"
                alt=""
                style={{ height: "40px", marginBottom: "5px" }}
              />
              Logout
            </Link>
          </div>
          <div className={`${classes.gridItem} ${classes.item2}`}>
            <h6 style={{ color: 'red' }}>{error}</h6>
            <h4 style={{ color: "#1cb56d", paddingLeft: "20px" }}>Menus</h4>
            <div
              style={{
                width: "18%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="../assets/images/brand/user.jpg"
                alt=""
                style={{
                  borderRadius: "100%",
                  paddingBottom: "10px",
                  height: "60px",
                  width: "60px",
                }}
              />
              <span style={{ marginRight: "20px" }}>{user.firstName}</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div >

    </>
  );
};

export default Dashboard;
