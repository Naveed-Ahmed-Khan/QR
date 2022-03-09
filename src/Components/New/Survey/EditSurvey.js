import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import Input from "../Input";

import classes from "./EditSurvey.module.css";
import ViewSurvey from "./ViewSurvey";
import { useLocation, useNavigate } from "react-router";
import { fetchSurvey } from "../../../APIs/api";

const EditSurvey = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [survey, setSurvey] = useState({});
  const [error, seterror] = useState("");
  const [surveyName, setSurveyName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [file1, setFile1] = useState("");
  const [items, setItems] = useState([]);
  const [check, setcheck] = useState(false);

  const [headerImg, setheaderImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSurvey({ mid: location.state?.id })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            setSurvey(response.data.menu);
            setAddress(response.data.menu.address);
            setCity(response.data.menu.city);
            setheaderImg(response.data.menu.headerImg);
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
    if (itemName.length !== 0 && description.length !== 0) {
      seterror("");
      const objID = Math.floor(Math.random() * 10000000000);
      var itemObj = {};
      itemObj.name = itemName;
      itemObj.description = description;
      itemObj.id = objID;

      items.push(itemObj);

      console.log("item added!", items);
      setItemName("");
      setDescription("");
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

  /* const updateMenu = async () => {
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
 */
  return (
    <>
      <div className={classes.gridItem}>
        <h4
          style={{
            margin: "5px 20px 5px 20px",
            height: "fit-content",
            color: "#1cb56d",
          }}
        >
          Edit Survey
        </h4>

        <div className={classes.item4}>
          <Input
            imageSrc="../assets/images/brand/survey.png"
            text="Survey Name"
            span="2"
            setFun={setSurveyName}
            val={surveyName}
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
            span="2"
            setFun={setCity}
            val={city}
          />
          <Input
            imageSrc="../assets/images/brand/description.png"
            text="Description"
            span="2"
            setFun={setDescription}
            val={description}
          />

          <label
            className={`${classes.anchor2} ${classes.grid2}`}
            /* style={{
              color: "#1cb56d",
              border: "2px dashed #1cb56d",
              borderRadius: "4px",
              textAlign: "center",
              padding: "4px 6px",
            }} */
          >
            <input
              className={`${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              onChange={(e) => handleheaderImgChange(e)}
            />
            Upload Header Image
          </label>
          <p
            style={{
              margin: "0",
              textAlign: "center",
              color: "#2A48A0",
              gridColumn: "span 2",
            }}
          >
            {file1}
          </p>

          <div
            style={{
              gridColumn: "span 2",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={addItem}
              variant="contained"
              style={{ width: "48%" }}
              id="button"
            >
              Update Item
            </Button>
            <Button
              onClick={() => {
                navigate("/dashboard/survey");
              }}
              variant="contained"
              style={{ width: "48%" }}
              id="button"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <ViewSurvey />
    </>
  );
};

export default EditSurvey;
