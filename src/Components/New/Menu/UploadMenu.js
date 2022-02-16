import React from "react";
import classes from "./UploadMenu.module.css";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuPreview from "./MenuPreview";

const UploadMenu = () => {
  /* const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  }; */

  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h5>Upload Menu</h5>
        <div className={classes.sub1}>
          {/* <div className={` ${classes.anchor1} ${classes.grid1}`}></div> */}
          <label
            className={` ${classes.anchor1} ${classes.grid1}`}
            style={{ color: "#1cb56d" }}
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

            <p className={` ${classes.a1}`}>
              <CloudUploadIcon
                style={{
                  color: "green[500]",
                  fontSize: "xx-large",
                  margin: "0 5px 5px 0",
                }}
              />
              Upload Excel/PDF/Image
            </p>
            <a href="##" className={classes.a2} style={{ color: "#1cb56d" }}>
              Download Template Excel
            </a>
          </label>

          <label
            className={` ${classes.anchor2} ${classes.grid2}`}
            style={{ color: "#1cb56d" }}
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
            <InsertPhotoIcon
              style={{
                color: "green[500]",
                fontSize: "xx-large",
                display: "block",
              }}
            />
            <p>Upload Header Image</p>
          </label>
          <label
            className={` ${classes.anchor2} ${classes.grid3}`}
            style={{ color: "#1cb56d" }}
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
            <InsertPhotoIcon
              style={{
                color: "green[500]",
                fontSize: "xx-large",
                display: "block",
              }}
            />
            <p>Upload Background Image</p>
          </label>
        </div>
      </div>
      <MenuPreview />
    </>
  );
};

export default UploadMenu;
