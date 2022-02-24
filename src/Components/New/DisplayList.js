import React, { useState, useEffect } from "react";
import classes from "./DisplayList.module.css";
import { Link } from "react-router-dom";
import classes2 from "./DisplayItem.module.css";
import DisplayItem from "./DisplayItem";
import List from "./List";
import Cookies from "js-cookie";
import { fetchUserMenus } from "../../APIs/api";

const DisplayItemList = (props) => {
  const [menus, setMenus] = useState([]);
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
  return (
    <>
      <div className={`${classes.gridItem} ${classes.item3}`}>
        <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
        <div className={classes.flexRow}>
          <List lists={menus} />
        </div>
      </div>
    </>
  );
};

export default DisplayItemList;
