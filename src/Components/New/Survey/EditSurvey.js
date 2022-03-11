import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import Input from "../Input";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import classes from "./EditSurvey.module.css";
import ViewSurvey from "./ViewSurvey";
import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { editSurvey, fetchSurvey } from "../../../APIs/api";

const EditSurvey = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [survey, setSurvey] = useState({});
  const [error, seterror] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [file1, setFile1] = useState("");
  const [check, setcheck] = useState(false);

  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSurvey({ sid: location.state?.id })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            setSurvey(response.data.survey);
            setName(response.data.survey.name);
            setAddress(response.data.survey.address);
            setCity(response.data.survey.city);
            setDescription(response.data.survey.description);
            setImage(response.data.survey.image);
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
    const file = e.target.files[0];

    setFile1(file.name);
    console.log("filename:", file.name);
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("header:", result);
        setImage(result);
        console.log("headerImg:", image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSurvey = async () => {
    await editSurvey({
      name,
      address,
      city,
      description,
      image,
      user: Cookies.get("id"),
      sid: location.state.id,
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          try {
            seterror("");
            alert("Menu Edited");
            navigate("/dashboard/survey");
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
                imageSrc=""
                myImg={
                  <FilterListIcon
                    sx={{
                      color: "#1cb56d",
                    }}
                  />
                }
                text="Survey Name"
                span="2"
                setFun={setName}
                val={name}
              />
              <Input
                imageSrc=""
                myImg={
                  <LocationOnIcon
                    sx={{
                      color: "#1cb56d",
                    }}
                  />
                }
                text="Address"
                span="2"
                setFun={setAddress}
                val={address}
              />
              <Input
                imageSrc=""
                myImg={
                  <LocationCityIcon
                    sx={{
                      color: "#1cb56d",
                    }}
                  />
                }
                text="City"
                span="2"
                setFun={setCity}
                val={city}
              />
              <Input
                imageSrc=""
                myImg={
                  <ClearAllIcon
                    sx={{
                      color: "#1cb56d",
                    }}
                  />
                }
                text="Description"
                span="2"
                setFun={setDescription}
                val={description}
              />
              <p style={{ color: "red", margin: "0", gridColumn: "span 2" }}>
                {error}
              </p>

              <label className={`${classes.anchor2} ${classes.grid2}`}>
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
                  gap: "16px",
                }}
              >
                <Button
                  onClick={updateSurvey}
                  variant="contained"
                  style={{ width: "50%", margin: 0 }}
                  id="button"
                >
                  Update Item
                </Button>
                <Button
                  onClick={() => {
                    navigate("/dashboard/survey");
                  }}
                  variant="contained"
                  style={{ width: "50%", margin: 0 }}
                  id="button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <ViewSurvey gridSpan={2} />
        </>
      )}
    </>
  );
};

export default EditSurvey;
