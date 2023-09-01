/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import classes from "./CardPrimary.module.css";

const CardPrimary = ({ className, children }) => {
  return (
    <>
      <div className={`${classes["card-primary"]} ${className}`}>
        {children}
      </div>
    </>
  );
};

export default CardPrimary;
