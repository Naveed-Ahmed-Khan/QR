import React, { useState, useEffect } from "react";
import classes from "./DisplayList.module.css";
import { Link } from "react-router-dom";
import classes2 from "./DisplayItem.module.css";
import DisplayItem from "./DisplayItem";
import List from "./List";
import Cookies from 'js-cookie';
import { fetchUserSurveys } from '../../APIs/api';


const DisplayItemList = (props) => {

  const [surveys, setsurveys] = useState([]);
  const [error, seterror] = useState("");

  useEffect(async () => {

    await fetchUserSurveys({
      uid: Cookies.get('id')
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu:", response.data)
          try {
            seterror("");
            setsurveys(response.data.menu);

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
  return (
    <>
      <div className={`${classes.gridItem} ${classes.item3}`}>
        <h5 style={{ paddingLeft: "20px" }}> All surveys</h5>
        <div className={classes.flexRow1}>
          <List lists={surveys} />
        </div>
      </div>
    </>
  );
};

export default DisplayItemList;
