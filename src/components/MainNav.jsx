import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import NavButton from "./UI/NavButton";

import classes from "./MainNav.module.css";

const Links = () => {
  return (
    <>
      <p>
        <a href="#home">home</a>
      </p>
      <p>
        <a href="#about">about</a>
      </p>
      <p>
        <a href="#contact">contact</a>
      </p>
    </>
  );
};

const MainNav = () => {
  const [navToogle, setNavToogle] = useState(false);

  // const navShowClass = navToogle ? classes["responsive-nav"] : "";

  return (
    <div className={classes["navbar"]}>
      <div className={classes["navbar-links"]}>
        <div className={classes["navbar-link_logo"]}>
          <p>
            <a href="#home">LOGO</a>
          </p>
        </div>
        <div className={classes["navbar-links_container"]}>
          <Links />
        </div>
      </div>
      <div className={classes["navbar-signs"]}>
        <p>
          <a href="#sing">sign in</a>
        </p>
        <button>sign up</button>
      </div>
      <div className={classes["navbar-menu"]}>
        {navToogle ? (
          <FaTimes
            className={classes["navbar-menu_icon"]}
            onClick={() => {
              setNavToogle(false);
            }}
          />
        ) : (
          <FaBars
            className={classes["navbar-menu_icon"]}
            onClick={() => setNavToogle(true)}
          />
        )}
        {navToogle && (
          <div className={classes["navbar-menu_containers"]}>
            <div className={classes["navbar-menu_container-links"]}>
              <Links />
            </div>
            <div className={classes["navbar-menu_container-signs"]}>
              <p>
                <a href="#sing">sign in</a>
              </p>
              <button>sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
