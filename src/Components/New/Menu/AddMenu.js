import React from "react";
import { Link } from "react-router-dom";
import classes from "./AddMenu.module.css";

const AddMenu = (props) => {
  console.log("props:", props)
  const uploadMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("UPLOAD_MENU");
  };
  const createMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("CREATE_MENU");
  };

  return (
    <div className={`${["card-body"]} ${classes.gridItem}`}>
      <div className={classes.sub1}>
        <h6 style={{ color: "#1cb56d" }}>Add Menu</h6>
        <Link to="/dashboard/upload-menu" className={classes.anchor}>
          <span className={classes.a1} style={{ color: "#1cb56d" }}>
            Upload Menu Items
          </span>
          <Link
            to="/dashboard/upload-menu"
            className={classes.a2}
            style={{ color: "#1cb56d" }}
          >
            {" "}
            Download Template Excel{" "}
          </Link>
        </Link>
        <h6 style={{ textAlign: "center"}}>OR</h6>
        <Link
          to="/dashboard/create-menu"
          state={{data:props}}
          className={classes.anchor}
          style={{ color: "#1cb56d" }}
        >
          Create Menu Items
        </Link>
      </div>
    </div>
  );
};

export default AddMenu;
