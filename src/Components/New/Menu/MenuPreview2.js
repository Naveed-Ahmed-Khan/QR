import React, { useState, useEffect } from "react";
import "./MenuPreview.css";

const MenuPreview = (props) => {

    const [error, seterror] = useState("");
    const [menu, setmenu] = useState({});
    console.log("props:", props.menu.items)

   
    return (
        <div className="gridItem">
            {props.menu.items != undefined ? (
                <>
                    <h5>Menu Preview</h5>
                    <div className="menuContainer">
                        <header className="menuHeader">
                            <h5>Restaurant Name </h5>
                            <p>{props.menu.resturantName}</p>
                            <h5>Address </h5>
                            <p>{props.menu.address}</p>

                            <h5 style={{ width: "50%", display: "inline-block" }}>City</h5>
                            <h5 style={{ width: "50%", display: "inline-block" }}>
                                Phone Number
                            </h5>
                            <p style={{ width: "50%", display: "inline-block" }}>{props.menu.city}</p>
                            <p style={{ width: "50%", display: "inline-block" }}>{props.menu.contact}</p>
                        </header>
                        <body className="itemList">
                            <div className="MenuP4">
                                <h5>Item Price</h5>
                                <h5>Price $</h5>
                            </div>
                            <div className="MenuP3">
                                {props.menu.items.map((item, key) => (
                                    <>
                                        <div className="MenuItems">
                                            <h5>{item.name}</h5>
                                            <h5>{item.price}</h5>
                                        </div>
                                    </>
                                ))}

                            </div>

                        </body>
                    </div>
                    <div>

                    </div></>

            ) : ""}

        </div>
    );
};

export default MenuPreview;
