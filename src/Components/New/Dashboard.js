import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { logedinuser } from "../../APIs/api";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FilterListIcon from "@mui/icons-material/FilterList";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LogoutIcon from "@mui/icons-material/Logout";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("MENU");
  const [altTab, setAltTab] = useState(false);
  const [menus, setMenus] = useState("");
  const [user, setuser] = useState({});
  const [error, seterror] = useState("");

  useEffect(async () => {
    await logedinuser({
      token: Cookies.get("token"),
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res:", response.data);
          try {
            seterror("");
            setuser(response.data.user);
          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("error:", error.message);
      });
  }, []);

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
              <RestaurantMenuIcon
                className={classes.tabImage}
                sx={{ color: `${activeTab === "MENU" ? "white" : "#1cb56d"} ` }}
              />

              <span style={{ marginRight: "80px" }}>Menu</span>
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
              <FilterListIcon
                className={classes.tabImage}
                sx={{
                  color: `${activeTab === "SURVEY" ? "white" : "#1cb56d"} `,
                }}
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
              <QrCodeIcon
                className={classes.tabImage}
                sx={{ color: `${activeTab === "QR" ? "white" : "#1cb56d"} ` }}
              />
              <span>QR Codes</span>
            </Link>
            <Link
              className={`${classes.sideItem} ${classes.side3}`}
              to="/login"
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("mail");
              }}
            >
              <LogoutIcon
                className={classes.tabImage}
                sx={{ color: `#1cb56d ` }}
              />
              Logout
            </Link>
          </div>
          <div className={`${classes.gridItem} ${classes.item2}`}>
            <h4 style={{ color: "#1cb56d", paddingLeft: "20px" }}>Menus</h4>
            {error && <h6 style={{ color: "red" }}>{error}</h6>}
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

                  height: "60px",
                  width: "60px",
                }}
              />
              <span style={{ marginRight: "20px" }}>{user.firstName}</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
