import React, { useState, useEffect } from "react";
import classes from "./ViewSurveyItem.module.css";
import SurveyPreview from "./SurveyPreview";
import List2 from "../List2";
import Cookies from 'js-cookie';
import { fetchUserMenus, fetchMenu, fetchUserSurveys, fetchSurvey } from '../../../APIs/api';
import { useLocation } from 'react-router-dom';

const ViewItems = (props) => {

  const location = useLocation();
  const [surveys, setsurveys] = useState([]);
  const [survey, setsurvey] = useState({});
  const [error, seterror] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [check, setcheck] = useState(false);
  const [description, setdessc] = useState("");
  const [currentSurvey, setcurrentSurvey] = useState(location.state.id);

  useEffect(async () => {
    await fetchUserSurveys({ uid: Cookies.get('id') })
      .then(function (response) {
        console.log(response);
        if (response.data.message === true) {
          console.log("res:", response.data)
          try {
            seterror("");
            setsurveys(response.data.surveys);


          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error)
        }

      })
      .catch(function (error) {
        console.log("error:", error.message)
      });

    await fetchSurvey({ sid: currentSurvey })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu previ:", response.data)
          try {
            seterror("");
            setsurvey(response.data.survey);
            setAddress(response.data.survey.address)
            setCity(response.data.survey.city)
            setContact(response.data.survey.contact)
            setName(response.data.survey.name)
            setdessc(response.data.survey.description)


          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error)
        }

      })
      .catch(function (error) {
        console.log("error:", error.message)
      });
  }, [currentSurvey])

  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h6 style={{ color: 'red' }}>{error}</h6>
        <h4>View Menu</h4>

        {console.log("surveys foundd:", surveys)}
        {surveys.length === 0 ? console.log("empty") :
          (


            <div className={classes.flexCol}>
              <List2 lists={surveys}
                currentSurvey={currentSurvey}
                setcurrentSurvey={setcurrentSurvey} />
            </div>
          )}

      </div>
      {console.log("current id: ", currentSurvey)}
      {survey.length === 0 ? console.log("empty") :
        <SurveyPreview

          address={address}
          city={city}
          contact={contact}
          name={name}
          description={description}

        />}
      {/* <MenuPreview2 menu={menu}/> */}

    </>
  );
};

export default ViewItems;
