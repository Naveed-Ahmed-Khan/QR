import React, { useState, useEffect } from "react";
import classes from "./Qr.module.css";
import Cookies from "js-cookie";
import { fetchUserMenus, fetchUserSurveys } from "../../../APIs/api";

const Qr = () => {
  const [menus, setMenus] = useState([]);
  const [surveys, setSurveys] = useState();
  const [error, seterror] = useState("");

  const fetchMenus = async () => {
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
  };
  const fetchSurveys = async () => {
    await fetchUserSurveys({
      sid: Cookies.get("id"),
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res surveys:", response.data);
          try {
            seterror("");
            setSurveys(response.data.survey);
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
  };

  useEffect(() => {
    fetchMenus();
    fetchSurveys();
  }, []);
  return (
    <div className={`${classes.gridItem} ${classes.item3}`}>
      <div className={classes.flexBox1}>
        <h4 style={{ paddingLeft: "20px" }}> All Menus</h4>
        <div className={classes.flexRow}>
          {menus.map((item, key) => (
            <div className={classes.imgContainer}>
              <img className={classes.image} src={item.qrcode} alt="" />
              <h3 style={{ textAlign: "center" }}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.flexBox2}>
        <h4 style={{ paddingLeft: "20px" }}> All Menus</h4>
        <div className={classes.flexRow}>
          {menus.map((item, key) => (
            <div className={classes.imgContainer}>
              <img className={classes.image} src={item.qrcode} alt="" />
              <h3 style={{ textAlign: "center" }}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qr;
