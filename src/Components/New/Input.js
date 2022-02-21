import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.createMenu}`}
      style={{ gridColumn: `span ${props.span}` }}
    >
      {props.imageSrc.trim().length !== 0 && (
        <img className={classes.icon} src={props.imageSrc} alt="" />
      )}
      <div style={{ paddingLeft: "15px", width: "100%" }}>
        <p className={classes.label}>{props.text}</p>
        <input className={classes.input} placeholder="Enter Here" value={props.val} onChange={(e)=>props.setFun(e.target.value)}/>
      </div>
    </div>
  );
};

export default Input;
