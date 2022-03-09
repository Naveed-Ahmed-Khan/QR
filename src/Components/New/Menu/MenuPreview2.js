import React, { useState, useEffect } from "react";
import classes from "./MenuPreview2.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Button from "@material-ui/core/Button";

const MenuPreview2 = (props) => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [check, setcheck] = useState(false);
  const [items, setItems] = useState([]);
  const [msg, setmsg] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      setItems(props.items);
    }
  }, []);

  const deleteItem = (item) => {
    // setmsg('The item will will be deleted once you click update menu.')
    //console.log("jjjitem: ", item)
    var filtered = props.items.filter((element) => element.id !== item.id);
    props.setItems(filtered);
    //console.log("filteres:", filtered)
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
        <div className={classes.itemList}>
          {/* <p style={{color:'#098F68', fontSize:14}}>{msg}</p> */}
          <div className={classes.MenuP4}>
            <h5>Item Price</h5>
            <h5>Price</h5>
          </div>
          <div className={classes.MenuP3}>
            {props.items.map((item, key) => (
              <>
                <div key={key} className={classes.MenuItems}>
                  <a className="deleteBtn" onClick={() => deleteItem(item)}>
                    {props.delete == true ? "Delete" : ""}
                  </a>
                  <h5>{item.name}</h5>
                  <h5>{item.price}</h5>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            gridColumn: "span 2",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            style={{ width: "48%" }}
            id="button"
            onClick={() => props.updateMenu()}
          >
            Update Item
          </Button>
          <Button
            variant="contained"
            style={{ width: "48%" }}
            id="button"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview2;
