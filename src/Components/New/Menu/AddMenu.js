import React from "react";
import { Link } from "react-router-dom";
import classes from "./AddMenu.module.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddMenu = (props) => {
  console.log("props:", props);
  const uploadMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("UPLOAD_MENU");
  };
  const createMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("CREATE_MENU");
  };

  return (
    <div className={`${classes.gridItem}`}>
      <div className={classes.sub1}>
        <h6 style={{ color: "#1cb56d", marginBottom: "13 px" }}>Add Menu</h6>
        <Link to="/dashboard/upload-menu" className={classes.anchor}>
          <span className={classes.a1} style={{ color: "#1cb56d" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CloudUploadIcon
                style={{
                  color: "green[500]",
                  fontSize: "xx-large",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <div>Upload Menu Items</div>
            </div>
          </span>
          <Link
            to="/dashboard/upload-menu"
            className={classes.a2}
            style={{ color: "#1cb56d" }}
          >
            Download Template Excel
          </Link>
        </Link>
        <h6 style={{ textAlign: "center", margin: "8px 0px" }}>OR</h6>
        <Link
          to="/dashboard/create-menu"
          state={{ data: props }}
          className={classes.anchor}
          style={{ color: "#1cb56d" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <AddCircleIcon
              style={{
                color: "green[500]",
                fontSize: "xx-large",
                display: "block",
                margin: "0 auto",
              }}
            />
            <div>Create Menu Items</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddMenu;
