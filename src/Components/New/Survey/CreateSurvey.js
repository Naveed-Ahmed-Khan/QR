import React, { useState, useEffect } from "react";
import classes from "./CreateSurvey.module.css";
import Input from "../Input";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Button } from "@material-ui/core";
import { createSurvey } from "../../../APIs/api";

const CreateSurvey = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [error, seterror] = useState("");
  const [name, setName] = useState("");
  const [file1, setFile1] = useState("");
  const [description, setDesc] = useState("");

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

  const handleImageChange = (e) => {
    var file = e.target.files[0];

    setFile1(file.name);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setImage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addSurvey = async () => {
    await createSurvey({
      name,
      address,
      city,
      description,
      image,
      user: Cookies.get("id"),
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res:", response.data);
          try {
            seterror("");
            alert("Survey Created");
            window.location.reload();
          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          console.log("error res:", response.data.error);
          seterror(response.data.error);
        }
      })
      .catch(function (error) {
        console.log("error:", error.message);
      });
  };

  return (
    <div className={classes.gridItem}>
      <h6>Create Survey</h6>
      <div className={classes.item4}>
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/survey.png"
          text="Survey Name"
          span="2"
          setFun={setName}
          val={name}
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/pin.png"
          text="Address"
          span="2"
          setFun={setAddress}
          val={address}
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/town.png"
          text="City"
          span="2"
          setFun={setCity}
          val={city}
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/description.png"
          text="Description"
          span="2"
          setFun={setDesc}
          val={description}
        />
      </div>
      <div className={classes.grid1}>
        <label className={`${classes.anchor2}`} style={{ color: "#1cb56d" }}>
          <input
            className={` ${classes.anchor1}`}
            type="file"
            label="Image"
            name="myFile"
            accept=".jpeg, .png, .jpg"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e)}
          />
          Upload Header Image
        </label>

        <Button
          style={{ width: "50%", margin: "0" }}
          fullWidth
          variant="contained"
          id="button"
          onClick={() => addSurvey()}
        >
          Create Survey
        </Button>
      </div>
      <p
        style={{
          margin: "0",
          padding: "0",
          textAlign: "center",
          maxWidth: "50%",
          color: "#2A48A0",
        }}
      >
        {file1}
      </p>
    </div>
  );
};

export default CreateSurvey;
