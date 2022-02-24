import React, { useState, useEffect } from "react";
import "./MenuPreview2.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Button from "@material-ui/core/Button";



const MenuPreview2 = (props) => {

    const navigate = useNavigate();
    const [error, seterror] = useState("");
    const [check, setcheck] = useState(false);
    const [items, setItems] = useState([]);
    const [msg, setmsg] = useState("");



  
    useEffect(async () => {
       
    if(items.length===0){
        setItems(props.items)
    }
        
    }, [])

    
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
                    <h5>Restaurant Name </h5>
                    <p>{props.resturantName}</p>
                    <h5>Address </h5>
                    <p>{props.address}</p>

                    <h5 style={{ width: "50%", display: "inline-block" }}>City</h5>
                    <h5 style={{ width: "50%", display: "inline-block" }}>
                        Phone Number
                    </h5>
                    <p style={{ width: "50%", display: "inline-block" }}>{props.city}</p>
                    <p style={{ width: "50%", display: "inline-block" }}>{props.contact}</p>
                </header>
                <body className="itemList">
                    {/* <p style={{color:'#098F68', fontSize:14}}>{msg}</p> */}
                    <div className="MenuP4">
                        <h5>Item Price</h5>
                        <h5>Price</h5>
                    </div>
                    <div className="MenuP3">
                        {props.items.map((item, key) => (
                            <>
                            
                                <div className="MenuItems">
                                    <a className="deleteBtn" onClick={() => deleteItem(item)}>{props.delete==true?"Delete":""}</a>
                                    <h5>{item.name}</h5>
                                    <h5>{item.price}</h5>
                                </div>
                            </>
                        ))}

                    </div>
              
                </body>
            </div>
            <div>


            </div>
        </div>
    );
};

export default MenuPreview2;
