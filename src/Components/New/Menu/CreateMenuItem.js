import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Button } from "@material-ui/core";
import classes from "./CreateMenuItem.module.css";
import classes2 from "./input1.module.css";
import MenuPreview from "./MenuPreview";
import { useLocation } from 'react-router-dom';
import { createMenu } from '../../../APIs/api';

const CreateMenuItem = () => {
  const location = useLocation();
  console.log("state:", location.state);
  const [name, setName] = useState("");
  const [error, seterror] = useState("");
  const [price, setPrice] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [items, setItems] = useState([]);
  const [description, setdessc] = useState("");
  const [headerImg, setheaderImg] = useState("");
  const [backgroundImg, setbackImg] = useState("");

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object

        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleheaderImgChange = (e) => {

    var file = e.target.files[0];

    setFile1(file.name)
    getBase64(file)
      .then(result => {
        file["base64"] = result;
        setheaderImg(result)
      })
      .catch(err => {
        console.log(err);
      });


  };

  const handleBackImgChange = (e) => {
    console.log("Fileeee: ", e.target.files[0]);

    
    var file = e.target.files[0];
    setFile2(file.name)
    getBase64(file)
      .then(result => {
        file["base64"] = result;
        setbackImg(result)
      })
      .catch(err => {
        console.log(err);
      });
  };


  const addItem = async () => {

    var itemObj = {};
    itemObj.name = name;
    itemObj.price = price;
    itemObj.description = description;

    items.push(itemObj);

    console.log("item added!", items)
    setName("");
    setPrice("");
    setdessc("");

  }

  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h5>Create Menu</h5>
        <div className={classes.sub1}>
          <div className={` ${classes.anchor1} ${classes.grid1}`}>

            <div className={classes2.container}>
              <h6 style={{ fontSize: 13 }}>Item Name</h6>
              <input className={classes2.input} placeholder="Enter Here" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className={classes2.container}>
              <h6 style={{ fontSize: 13 }}>Item Price</h6>
              <input className={classes2.input} placeholder="Enter Here" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>

            <div
              style={{
                width: "95%",
                border: "2px solid #1cb56d ",
                borderRadius: "12px",
                padding: "5px 20px",
                marginBottom: "10px",
              }}
            >
              <h6 style={{ fontSize: 13 }}>Description</h6>
              <textarea
                style={{ width: "100%", height: "100px", border: "none" }}
                placeholder="Enter Here"
                value={description}
                onChange={(e) => setdessc(e.target.value)}
                required
              />
            </div>
          </div>
          <label
            className={`${classes.anchor2} ${classes.grid2}`}
            style={{ color: "#1cb56d" }}
          >
            <input
              className={` ${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              onChange={(e) => handleheaderImgChange(e)}
            />
            Upload Header Image
          </label>
          
          <label
            className={` ${classes.anchor2} ${classes.grid3}`}
            style={{ color: "#1cb56d" }}
          >
            <input
              className={` ${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              onChange={(e) => handleBackImgChange(e)}
            />
            Upload Background Image
            
          </label>
          <p style={{textAlign:'center', color:'#2A48A0'}}>{file1}</p>
          <p style={{textAlign:'center', color:'#2A48A0'}}>{file2}</p>
          <div style={{ gridColumn: "span 2" }}>
            <Button variant="contained" fullWidth id="button" onClick={() => addItem()}>
              Add Item
            </Button>
          </div>
        </div>
      </div>
      <MenuPreview 
      resturantName={location.state.data.resturantName}
      address={location.state.data.address}
      city= {location.state.data.city}
      contact={ location.state.data.contact}
      name={location.state.data.name}
      items={items}
      headerImg={headerImg}
      backgroundImg={backgroundImg}
      />
    </>
  );
};

export default CreateMenuItem;
