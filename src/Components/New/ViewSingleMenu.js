import React, { useState, useEffect } from "react";
import classes from "./ViewMenuItem.module.css";
import { useParams } from "react-router-dom";
import MenuPreview2 from "./Menu/MenuPreview2";
import { fetchMenu } from "../../APIs/api";

const ViewItems = () => {
  const [menu, setmenu] = useState({});
  const [error, seterror] = useState("");

  let { mid } = useParams();
  console.log("mid:", mid);

  const getMenu = async () => {
    await fetchMenu({ mid })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu previ:", response.data);
          try {
            seterror("");
            setmenu(response.data.menu);
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

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      {/* <div className={` ${classes.gridItem}`}>
                <h6 style={{ color: 'red' }}>{error}</h6>
                <h4>View Menu</h4>
            </div> */}
      {menu.length === 0 ? console.log("empty") : <MenuPreview2 menu={menu} />}
      {/* <MenuPreview2 menu={menu}/> */}
    </>
  );
};

export default ViewItems;
