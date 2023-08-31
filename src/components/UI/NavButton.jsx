/* eslint-disable react/prop-types */
import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <button
      className={`${classes["nav-btn"]} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
