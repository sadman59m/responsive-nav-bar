import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import NavButton from "./UI/NavButton";

import classes from "./MainNav.module.css";

const MainNav = () => {
  const [isShown, setIsShown] = useState(false);

  const navShownHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  const navShowClass = isShown ? classes["responsive-nav"] : "";

  return (
    <>
      <header className={navShowClass}>
        <h3>MyCryptos</h3>
        <nav>
          <a href="https://academy.vivasoftltd.com/javascript-bootcamp">
            Javascript Bootcamp
          </a>
          <a href="https://academy.vivasoftltd.com/typescript-bootcamp">
            Typescript Bootcamp
          </a>
          <a href="https://academy.vivasoftltd.com/python-bootcamp">
            Python Bootcamp
          </a>
          <NavButton
            className={classes["nav-btn-close"]}
            onClick={navShownHandler}
          >
            <FaTimes />
          </NavButton>
        </nav>
        <NavButton
          className={classes["nav-btn-open"]}
          onClick={navShownHandler}
        >
          <FaBars />
        </NavButton>
      </header>
    </>
  );
};

export default MainNav;
