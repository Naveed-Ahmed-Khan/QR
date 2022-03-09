import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Input from "../Input";
import Cookies from "js-cookie";
import classes from "./EditMenu.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import MenuPreview2 from "./MenuPreview2";
import { fetchMenu, editMenu } from "../../../APIs/api";

const EditMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setmenu] = useState({});
  const [error, seterror] = useState("");
  const [resturantName, setResturant] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [contact, setContact] = useState("");
  const [price, setPrice] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [items, setItems] = useState([]);
  const [check, setcheck] = useState(false);
  const [description, setdessc] = useState("");
  const [headerImg, setheaderImg] = useState("");
  const [backgroundImg, setbackImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchMenu({ mid: location.state?.id })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            setmenu(response.data.menu);
            setResturant(response.data.menu.resturantName);
            setAddress(response.data.menu.address);
            setCity(response.data.menu.city);
            setContact(response.data.menu.contact);
            setName(response.data.menu.name);
            setheaderImg(response.data.menu.headerImg);
            setbackImg(response.data.menu.backgroundImg);
            setItems(response.data.menu.items);
            setIsLoading(true);
          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("error:", error.message);
      });
  }, [check]);

  const addItem = async () => {
    if (
      itemName.length !== 0 &&
      price.length !== 0 &&
      description.length !== 0
    ) {
      seterror("");
      const objID = Math.floor(Math.random() * 10000000000);
      var itemObj = {};
      itemObj.name = itemName;
      itemObj.price = price;
      itemObj.description = description;
      itemObj.id = objID;

      items.push(itemObj);

      console.log("item added!", items);
      setItemName("");
      setPrice("");
      setdessc("");
    } else {
      seterror("Fill out all fields");
    }
  };
  const getBase64 = (file) => {
    return new Promise((resolve) => {
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

    setFile1(file.name);
    console.log("filename:", file.name);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("header:", result);
        setheaderImg(result);
        console.log("headerImg:", headerImg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBackImgChange = (e) => {
    var file = e.target.files[0];
    setFile2(file.name);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setbackImg(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateMenu = async () => {
    await editMenu({
      resturantName,
      address,
      city,
      contact,
      name,
      items,
      user: Cookies.get("id"),
      headerImg,
      backgroundImg,
      mid: location.state.id,
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            alert("Menu Edited");
            navigate("/dashboard");
          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("error:", error.message);
      });
  };
  return (
    <>
      {isLoading && (
        <>
          <div className={classes.gridItem}>
            <h6
              style={{
                margin: "5px 0 5px 20px",
                height: "fit-content",
                color: "#1cb56d",
              }}
            >
              Edit Menu
            </h6>
            <p
              style={{
                margin: "0 0 5px 20px",
                height: "fit-content",
                color: "#848487",
                marginLeft: 20,
              }}
            >
              Restaurant Details
            </p>
            <div className={classes.item4}>
              <Input
                imageSrc="../assets/images/brand/fork.png"
                text="Restaurant Name"
                span="2"
                setFun={setResturant}
                val={resturantName}
              />
              <Input
                imageSrc="../assets/images/brand/pin.png"
                text="Address"
                span="2"
                setFun={setAddress}
                val={address}
              />
              <Input
                imageSrc="../assets/images/brand/town.png"
                text="City"
                span="1"
                setFun={setCity}
                val={city}
              />
              <Input
                imageSrc="../assets/images/brand/telephone.png"
                text="Phone Number"
                span="1"
                setFun={setContact}
                val={contact}
              />

              <Input
                imageSrc="../assets/images/brand/menu.png"
                text="Menu Name"
                span="2"
                setFun={setName}
                val={name}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gridColumn: "span 2",
                  margin: "0",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    color: "#848487",
                  }}
                >
                  Add New Items
                </p>

                <p style={{ color: "red", margin: "0" }}>{error}</p>
              </div>

              <Input
                imageSrc=""
                text="Item Name"
                span="1"
                setFun={setItemName}
                val={itemName}
              />
              <Input
                imageSrc=""
                text="Item Price"
                span="1"
                setFun={setPrice}
                val={price}
              />
              <div
                style={{
                  border: "2px solid #1cb56d ",
                  borderRadius: "12px",
                  padding: "5px 20px",
                  marginBottom: "10px",
                  gridColumn: "span 2",
                }}
              >
                <h6 style={{ color: "#1cb56d" }}>Description</h6>
                <textarea
                  style={{
                    width: "100%",
                    border: "none",
                  }}
                  placeholder="Enter Here"
                  value={description}
                  onChange={(e) => setdessc(e.target.value)}
                  required
                />
              </div>

              <div style={{ gridColumn: "span 2" }}>
                <Button
                  variant="contained"
                  fullWidth
                  id="button"
                  onClick={() => addItem()}
                  style={{ marginBottom: 10 }}
                >
                  Add Item
                </Button>
              </div>
              <label
                className={`${classes.anchor2} ${classes.grid2}`}
                style={{
                  color: "#1cb56d",
                  border: "2px dashed #1cb56d",
                  borderRadius: "4px",
                  textAlign: "center",
                  padding: "4px 6px",
                }}
              >
                <input
                  className={`${classes.anchor1} ${classes.grid1}`}
                  type="file"
                  label="Image"
                  name="myFile"
                  accept=".jpeg, .png, .jpg"
                  style={{ display: "none", marginTop: 10 }}
                  onChange={(e) => handleheaderImgChange(e)}
                />
                Upload Header Image
              </label>
              <label
                className={` ${classes.anchor2} ${classes.grid3}`}
                style={{
                  color: "#1cb56d",
                  border: "2px dashed #1cb56d",
                  borderRadius: "4px",
                  textAlign: "center",
                  padding: "4px 6px",
                }}
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

              <p style={{ textAlign: "center", color: "#2A48A0" }}>{file1}</p>
              <p style={{ textAlign: "center", color: "#2A48A0" }}>{file2}</p>
              {/* <div
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
                  onClick={() => updateMenu()}
                >
                  Update Item
                </Button>
                <Button
                  variant="contained"
                  style={{ width: "48%" }}
                  id="button"
                  onClick={() => {
                    navigate("/dashboard/menu");
                  }}
                >
                  Cancel
                </Button>
              </div> */}
            </div>
          </div>
          <MenuPreview2
            resturantName={resturantName}
            address={address}
            city={city}
            contact={contact}
            name={name}
            items={items}
            setItems={setItems}
            headerImg={headerImg}
            backgroundImg={backgroundImg}
            delete={true}
            updateMenu={updateMenu}
          />
        </>
      )}

      {/* <MenuPreview menu={menu}/> */}
    </>
  );
};

export default EditMenu;
