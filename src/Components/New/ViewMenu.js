import React from "react";
import DisplayItem from "./DisplayItem";
import { Link } from "react-router-dom";
import classes from "./DisplayItem.module.css";

const List = (props) => {

  console.log("menu:", props.menu);
  return (
    <>
      {props.menus.length == 0 ? (
        <div style={{alignItems:'center', justifyContent:'center'}}>
        <h4 style={{ textAlign: 'center' }}>No menus yet</h4>
        </div>
      )
        :
        props.menus.map((item, key) => (
          <div className={classes.flexItem}>
            <Link to="/dashboard/view-items" state={{id:item._id}}>
              
              <img
                className={classes.img}
                src={item.headerImg}
                alt="Food-item"
               
              />
              
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
                12 jan 2022
              </p>
              <Link
                to="/dashboard/edit-items"
                className={classes.anchor}
                style={{ marginRight: "10px" }}
              >
                edit
              </Link>
              <Link to="/dashboard/view-items" className={classes.anchor}>
                delete
              </Link>
            </div>
          </div>
        ))}

      {/* <DisplayItem text={props.text} />
      <DisplayItem text={props.text} />
      <DisplayItem text={props.text} /> */}
    </>
  );
};

export default List;
