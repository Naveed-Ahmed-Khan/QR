import React, { useState, useEffect } from "react";
import classes from "./DisplayList.module.css";
import { Link } from "react-router-dom";
import DisplayItem from "./DisplayItem";
import List2 from "./List2";
import Cookies from "js-cookie";
import { fetchUserSurveys } from "../../APIs/api";

const DisplayItemList = (props) => {
  const [surveys, setsurveys] = useState([]);
  const [error, seterror] = useState("");

  useEffect(async () => {
    await fetchUserSurveys({
      uid: Cookies.get("id"),
    })
      .then(function (response) {
        console.log(response);
        if (response.data.message === true) {
          console.log("res survey:", response.data.surveys);
          try {
            seterror("");
            setsurveys(response.data.surveys);
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
        <h5 style={{ paddingLeft: "20px" }}> All surveys</h5>
        <div className={classes.flexRow}>
          <List2 lists={surveys} />
        </div>
      </div>
    </>
  );
};

export default DisplayItemList;
