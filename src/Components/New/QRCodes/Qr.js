import React, { useState, useEffect } from "react";
import classes from "./Qr.module.css";
import Cookies from "js-cookie";
import { fetchUserMenus, fetchUserSurveys } from "../../../APIs/api";

const Qr = () => {
  const [menus, setMenus] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [error, seterror] = useState("");

  useEffect(async () => {
    await fetchUserMenus({
      uid: Cookies.get("id"),
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu:", response.data);
          try {
            seterror("");
            setMenus(response.data.menu);
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

  useEffect(async () => {
    await fetchUserSurveys({
      uid: Cookies.get("id"),
    })
      .then(function (response) {
        console.log(response);
        if (response.data.message === true) {
          console.log("res survey:", response.data);
          try {
            seterror("");
            setSurveys(response.data.surveys);
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

  return (
    <div className={`${classes.item3}`}>
      <div className={classes.flexBox}>
        <h4 style={{ paddingLeft: "20px" }}> All Menus</h4>
        <div className={classes.flexRow}>
          {menus.map((item, key) => (
            <div className={classes.imgContainer}>
              <img className={classes.image} src={item.qrcode} alt="" />
              <h4 style={{ textAlign: "center", color: "#1cb56d" }}>
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.flexBox}>
        <h4 style={{ paddingLeft: "20px" }}> All Surveys</h4>
        <div className={classes.flexRow}>
          {surveys.map((item, key) => (
            <div className={classes.imgContainer}>
              <img className={classes.image} src={item.qrcode} alt="" />
              <h4 style={{ textAlign: "center", color: "#1cb56d" }}>
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qr;
