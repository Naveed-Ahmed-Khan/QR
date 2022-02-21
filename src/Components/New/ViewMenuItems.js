import React, { useState, useEffect } from "react";
import classes from "./ViewMenuItem.module.css";
import MenuPreview2 from "./Menu/MenuPreview2";
import DisplayItem from "./DisplayItem";
import List from "./List";
import Cookies from 'js-cookie';
import { fetchUserMenus, fetchMenu } from '../../APIs/api';
import { useLocation } from 'react-router-dom';

const ViewItems = (props) => {

  const location = useLocation();
  const [menus, setmenus] = useState([]);
  const [menu, setmenu] = useState({});
  const [error, seterror] = useState("");
  const [currentMenu, setCurrentMenu] = useState(location.state.id);

  useEffect(async () => {
    await fetchUserMenus({ uid: Cookies.get('id') })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res:", response.data)
          try {
            seterror("");
            setmenus(response.data.menu);

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

    await fetchMenu({ mid: currentMenu })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu previ:", response.data)
          try {
            seterror("");
            setmenu(response.data.menu);

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
    <>
      <div className={` ${classes.gridItem}`}>
        <h6 style={{ color: 'red' }}>{error}</h6>
        <h4>View Menu</h4>

        <div className={classes.flexCol}>
          <List lists={menus}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu} />
        </div>

      </div>
      {console.log("current id: ", currentMenu)}
      {menu.length === 0 ? console.log("empty") : <MenuPreview2 menu={menu} />}
      {/* <MenuPreview2 menu={menu}/> */}

    </>
  );
};

export default ViewItems;
