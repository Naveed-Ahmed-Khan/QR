import React, { useState, useEffect } from "react";
import classes from "./ViewSurvey.module.css";
import Cookies from 'js-cookie';
import { fetchUserSurveys } from '../../../APIs/api';

const ViewSurvey = () => {

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
            setsurveys(response.data.survey);

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
    <div className={classes.gridItem}>
      <h6 style={{ color: "#1cb56d", marginBottom: "10px" }}>View Survey</h6>
      <div className={classes.sub1}>
        <div className={classes.item1} style={{ marginLeft: "15px" }}>
          Image
        </div>
        <div className={classes.item1} style={{ marginLeft: "25px" }}>
          Description
        </div>
        <div className={classes.item1}>Select Vote</div>
        {surveys.map((item, key) => (
          <div className={classes.item}>
            <img
              src={item.image}
              alt="img"
              style={{
                width: "70px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <p style={{ width: "220px", marginTop: "18px" }}>
              {item.description}
            </p>
            <input
              type={"checkbox"}
              style={{ width: "50px", marginRight: "30px" }}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ViewSurvey;
