import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import classes from "./DisplayItem.module.css";
import { deleteSurvey } from "../../APIs/api";

const List2 = (props) => {
  const navigate = useNavigate();
  const [error, seterror] = useState();

  const deleteFun = async (id) => {
    await deleteSurvey({ sid: id })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            alert("Deleted");
            window.location.reload();
            navigate("/dashboard/survey");
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
  return (
    <>
      {props.lists.length === 0 ? (
        <div style={{ alignItems: "center", justifyContent: "center" }}>
          <h4 style={{ textAlign: "center", marginLeft: 20 }}>
            No surveys yet
          </h4>
        </div>
      ) : (
        props.lists.map((item, key) => (
          <div
            className={classes.flexItem}
            onClick={() => props.setcurrentSurvey(item._id)}
          >
            <Link to="/dashboard/view-survey-items" state={{ id: item._id }}>
              <img className={classes.img} src={item.image} alt="Food-item" />
            </Link>

            <div style={{ width: "60%", float: "right" }}>
              <p
                style={{
                  margin: "10px 0 0",
                  padding: "0",
                }}
              >
                {item.name}
              </p>
              <p style={{ margin: "0", padding: "0", fontSize: "x-small" }}>
                {item.city}
              </p>

              <Link
                to="/dashboard/edit-survey-items"
                state={{ id: item._id }}
                className={classes.anchor}
                style={{ marginRight: "10px" }}
              >
                edit
              </Link>
              <Link
                to="/dashboard/survey"
                className={classes.anchor}
                onClick={() => deleteFun(item._id)}
                style={{ color: "red" }}
              >
                delete
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default List2;
