import React, { useState }from "react";
import "./MenuPreview.css";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Button from "@material-ui/core/Button";
import { createMenu } from '../../../APIs/api';


const MenuPreview = (props) => {
  
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  
  const addMenu = async () => {

    console.log("props:", props);
    await createMenu({
      resturantName: props.resturantName,
      address: props.address,
      city: props.city,
      contact: props.contact,
      name: props.name,
      items: props.items,
      headerImg: props.headerImg,
      backgroundImg: props.backgroundImg,
      uid: Cookies.get('id')

    }).then(function (response) {
      //   console.log(response);
      if (response.data.message === true) {
        console.log("res:", response.data)
        try {
          seterror("");
          alert("Menu Created");
          navigate('/dashboard');

        } catch (e) {
          return null;
        }
      } else if (response.data.message === false) {
        console.log("error res:", response.data.error)
        seterror(response.data.error)
      }

    })
      .catch(function (error) {
        console.log("error:", error.message)
      });
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
          <div className="MenuP4">
            <h5>Item Price</h5>
            <h5>Price</h5>
          </div>
          <div className="MenuP3">
            {props.items.map((item, key) => (
              <>
              {console.log("item:", item)}
              <div className="MenuItems">
                <h5>{item.name}</h5>
                <h5>{item.price}</h5>
                </div>
              </>
            ))}

          </div>
          {/* <div className="MenuP3">
            <h5>Coffee</h5>
            <h5>$1.34</h5>
          </div>
          <div className="MenuP4">
            <h5>Ice Tea</h5>
            <h5>$0.99</h5>
          </div>
          <div className="MenuP3">
            <h5>Pizza</h5>
            <h5>$5.65</h5>
          </div>
          <div className="MenuP4">
            <h5>Pasta</h5>
            <h5 s>$2.95</h5>
          </div> */}
        </body>
      </div>
      <div>
        <Button variant="contained" fullWidth id="button" onClick={()=>addMenu()}>
          Create Menu
        </Button>
      </div>
    </div>
  );
};

export default MenuPreview;
