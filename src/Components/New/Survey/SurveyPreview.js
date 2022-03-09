import React, { useState, useEffect } from "react";
import "./SurveyPreview.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Button from "@material-ui/core/Button";

const SurveyPreview = (props) => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [check, setcheck] = useState(false);
  const [msg, setmsg] = useState("");

  const deleteItem = (item) => {
    // setmsg('The item will will be deleted once you click update menu.')
    //console.log("jjjitem: ", item)
    var filtered = props.items.filter((element) => element.id !== item.id);
    props.setItems(filtered);
    //console.log("filteres:", filtered)
  };
  return (
    <div className="gridItem">
      <h5>Survey Preview</h5>
      <div className="menuContainer">
        <header className="menuHeader">
          <h5>Survey Name </h5>
          <p>{props.name}</p>
          <h5>Address </h5>
          <p>{props.address}</p>
          <h5>City</h5>
          <p>{props.city}</p>
          <h5>Description</h5>
          <p>{props.description}</p>
        </header>
      </div>
      <div></div>
    </div>
  );
};

export default SurveyPreview;
