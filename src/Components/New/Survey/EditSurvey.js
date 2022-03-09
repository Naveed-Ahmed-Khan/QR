import { Button } from "@material-ui/core";
import React from "react";
import Input from "../Input";

import classes from "./EditSurvey.module.css";
import ViewSurvey from "./ViewSurvey";

const EditSurvey = () => {
  return (
    <>
      <div className={classes.gridItem}>
        <h4
          style={{
            margin: "5px 20px 5px 20px",
            height: "fit-content",
            color: "#1cb56d",
          }}
        >
          Edit Survey
        </h4>

        <div className={classes.item4}>
          <Input
            className={classes.sub1}
            imageSrc="../assets/images/brand/survey.png"
            text="Survey Name"
            span="2"
          />
          <Input
            className={classes.sub1}
            imageSrc="../assets/images/brand/pin.png"
            text="Address"
            span="2"
          />
          <Input
            className={classes.sub1}
            imageSrc="../assets/images/brand/town.png"
            text="City"
            span="2"
          />
          <Input
            className={classes.sub1}
            imageSrc="../assets/images/brand/description.png"
            text="Description"
            span="2"
          />
          <div
            style={{
              width: "100%",
              border: "2px solid #1cb56d ",
              borderRadius: "12px",
              padding: "5px 20px",
              marginBottom: "10px",
              gridColumn: "span 2",
            }}
          >
            <h6>Description</h6>
            <textarea
              style={{ width: "100%", height: "50px", border: "none" }}
              placeholder="Enter Here"
            />
          </div>
          <label
            className={`${classes.anchor2} ${classes.grid2}`}
            style={{
              color: "#1cb56d",
              border: "2px dashed #1cb56d",
              borderRadius: "4px",
              textAlign: "center",
              padding: "4px 6px",
            }}
          >
            <input
              className={`${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              /* onChange={(e) => handleFileUpload(e)} */
            />
            Upload Header Image
          </label>
          <label
            className={` ${classes.anchor2} ${classes.grid3}`}
            style={{
              color: "#1cb56d",
              border: "2px dashed #1cb56d",
              borderRadius: "4px",
              textAlign: "center",
              padding: "4px 6px",
            }}
          >
            <input
              className={` ${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              /* onChange={(e) => handleFileUpload(e)} */
            />
            Upload Background Image
          </label>
          <div
            style={{
              gridColumn: "span 2",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" style={{ width: "48%" }} id="button">
              Update Item
            </Button>
            <Button variant="contained" style={{ width: "48%" }} id="button">
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <ViewSurvey />
    </>
  );
};

export default EditSurvey;
