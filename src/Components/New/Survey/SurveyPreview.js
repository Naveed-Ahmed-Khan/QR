import React, { useState, useEffect } from "react";
import "./SurveyPreview.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Button from "@material-ui/core/Button";



const SurveyPreview = (props) => {

    const navigate = useNavigate();
    const [error, seterror] = useState("");
    const [check, setcheck] = useState(false);
    const [msg, setmsg] = useState("");


    
    const deleteItem = (item) =>{

        // setmsg('The item will will be deleted once you click update menu.')
        //console.log("jjjitem: ", item)
        var filtered = props.items.filter(element=> element.id!==item.id);
        props.setItems(filtered);
        //console.log("filteres:", filtered)
    }
    return (
        <div className="gridItem">
            <h5>Menu Preview</h5>
            <div className="menuContainer">
                <header className="menuHeader">
                    <h5>Survey Name </h5>
                    <p>{props.name}</p>
                    <h5>Address </h5>
                    <p>{props.address}</p>

                    <h5 style={{ width: "50%", display: "inline-block" }}>City</h5>
                    <h5 style={{ width: "50%", display: "inline-block" }}>
                        Phone Number
                    </h5>
                    <p style={{ width: "50%", display: "inline-block" }}>{props.city}</p>
                    <p style={{ width: "50%", display: "inline-block" }}>{props.contact}</p>

                    <h5>Description</h5>
                    <p>{props.description}</p>
                </header>
               
            </div>
            <div>


            </div>
        </div>
    );
};

export default SurveyPreview;
