import React, { useState } from "react";
import classes from "./MenuPreview2.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Button from "@material-ui/core/Button";
import { createMenu } from "../../../APIs/api";

const MenuPreview = (props) => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const addMenu = async () => {
    console.log("length:", props.items.length);
    if (props.items.length !== 0) {
      await createMenu({
        resturantName: props.resturantName,
        address: props.address,
        city: props.city,
        contact: props.contact,
        name: props.name,
        items: props.items,
        headerImg: props.headerImg,
        backgroundImg: props.backgroundImg,
        uid: Cookies.get("id"),
      })
        .then(function (response) {
          //   console.log(response);
          if (response.data.message === true) {
            console.log("res:", response.data);
            try {
              seterror("");
              alert("Menu Created");
              navigate("/dashboard");
            } catch (e) {
              return null;
            }
          } else if (response.data.message === false) {
            console.log("error res:", response.data.error);
            seterror(response.data.error);
          }
        })
        .catch(function (error) {
          console.log("error:", error.message);
        });
    } else {
      alert("Add atleast one item");
    }
  };
  return (
    <div className={classes.gridItem}>
      <h5>Menu Preview</h5>
      <div className={classes.menuContainer}>
        <header className={classes.menuHeader}>
          <h5>Restaurant Name </h5>
          <p>{props.resturantName}</p>
          <h5>Address </h5>
          <p>{props.address}</p>

          <h5 style={{ width: "50%", display: "inline-block" }}>City</h5>
          <h5 style={{ width: "50%", display: "inline-block" }}>
            Phone Number
          </h5>
          <p style={{ width: "50%", display: "inline-block" }}>{props.city}</p>
          <p style={{ width: "50%", display: "inline-block" }}>
            {props.contact}
          </p>
        </header>
        <body className={classes.itemList}>
          <div className={classes.MenuP4}>
            <h5>Item Price</h5>
            <h5>Price</h5>
          </div>
          <div className={classes.MenuP3}>
            {props.items.map((item, key) => (
              <>
                {console.log("item:", item)}
                <div className={classes.MenuItems}>
                  <h5>{item.name}</h5>
                  <h5>{item.price}</h5>
                </div>
              </>
            ))}
          </div>
        </body>
      </div>
      <div>
        <Button
          variant="contained"
          fullWidth
          id="button"
          onClick={() => addMenu()}
        >
          Create Menu
        </Button>
      </div>
    </div>
  );
};

export default MenuPreview;
