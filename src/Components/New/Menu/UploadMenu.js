import React, { useState } from "react";
import classes from "./UploadMenu.module.css";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuPreview from "./MenuPreview";
import { useLocation, useNavigate } from "react-router";

const UploadMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setmenu] = useState({});
  const [error, seterror] = useState("");
  const [resturantName, setResturant] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [contact, setContact] = useState("");
  const [price, setPrice] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [items, setItems] = useState([]);
  const [check, setcheck] = useState(false);
  const [description, setdessc] = useState("");
  const [headerImg, setheaderImg] = useState("");
  const [backgroundImg, setbackImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      {/* <MenuPreview
        resturantName={location.state.data.resturantName}
        address={location.state.data.address}
        city={location.state.data.city}
        contact={location.state.data.contact}
        name={location.state.data.name}
        items={items}
        headerImg={headerImg}
        backgroundImg={backgroundImg}
      /> */}
    </>
  );
};

export default UploadMenu;
