import React, { useState, useEffect } from "react";
import classes from "./Qr.module.css";
import Cookies from 'js-cookie';
import { fetchUserMenus } from '../../../APIs/api';

const Qr = () => {

  const [menus, setMenus] = useState([]);
  const [error, seterror] = useState("");

  useEffect(async () => {

    await fetchUserMenus({
      uid: Cookies.get('id')
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu:", response.data)
          try {
            seterror("");
            setMenus(response.data.menu);

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

  }, [])
  return (
    <div className={`${classes.gridItem} ${classes.item3}`}>
      <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
      <div className={classes.flexRow1}>
        {menus.map((item, key) => (

          <div className={classes.imgContainer}>
            <img className={classes.image} src={item.qrcode} />
            <h3 style={{textAlign:'center'}}>{item.name}</h3>
          </div>

        ))}
      </div>
      <div className={classes.flexRow2}>{/* <List text={props.text} /> */}</div>
    </div>
  );
};

export default Qr;
