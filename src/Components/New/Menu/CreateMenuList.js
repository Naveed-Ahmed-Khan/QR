import React, { useState, useEffect } from "react";
import classes from "./CreateMenuList.module.css";
import Input from "../Input";
import AddMenu from "./AddMenu";
import classes2 from "./input.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneIcon from "@mui/icons-material/Phone";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { green } from "@material-ui/core/colors";

const CreateMenuList = () => {
  const [resturantName, setResturant] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const span = "2",
    span2 = "1";
  return (
    <>
      <div className={classes.gridItem}>
        <h6
          style={{
            margin: "5px 0 5px 20px",
            height: "fit-content",
            color: "#1cb56d",
          }}
        >
          Create Menu
        </h6>
        <p style={{ margin: "0 0 5px 20px", height: "fit-content" }}>
          Restaurant Details
        </p>
        <div className={classes.item4}>
          <div
            className={`${classes2.createMenu}`}
            style={{ gridColumn: `span ${span}` }}
          >
            <RestaurantIcon
              sx={{
                color: "#1cb56d",
              }}
            />

            <div className={classes2.text}>
              <p className={classes2.label}>Restaurant Name</p>
              <input
                className={classes2.input}
                placeholder="Enter Here"
                value={resturantName}
                onChange={(e) => setResturant(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className={`${classes2.createMenu}`}
            style={{ gridColumn: `span ${span}` }}
          >
            <LocationOnIcon
              sx={{
                color: "#1cb56d",
              }}
            />

            <div style={{ paddingLeft: "15px", width: "100%" }}>
              <p className={classes2.label}>Address</p>

              <input
                className={classes2.input}
                placeholder="Enter Here"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className={`${classes2.createMenu}`}
            style={{ gridColumn: `span ${span2}` }}
          >
            <LocationCityIcon
              sx={{
                color: "#1cb56d",
              }}
            />

            <div style={{ paddingLeft: "15px", width: "100%" }}>
              <p className={classes2.label}>City</p>

              <input
                className={classes2.input}
                placeholder="Enter Here"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className={`${classes2.createMenu}`}
            style={{ gridColumn: `span ${span2}` }}
          >
            <PhoneIcon
              sx={{
                color: "#1cb56d",
              }}
            />

            <div style={{ paddingLeft: "15px", width: "100%" }}>
              <p className={classes2.label}>Phone Number</p>

              <input
                className={classes2.input}
                placeholder="Enter Here"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className={`${classes2.createMenu}`}
            style={{ gridColumn: `span ${span}` }}
          >
            <ClearAllIcon
              sx={{
                color: "#1cb56d",
              }}
            />

            <div style={{ paddingLeft: "15px", width: "100%" }}>
              <p className={classes2.label}>Menu Name</p>

              <input
                className={classes2.input}
                placeholder="Enter Here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <AddMenu
        resturantName={resturantName}
        address={address}
        city={city}
        contact={contact}
        name={name}
      />
    </>
  );
};

export default CreateMenuList;
