/* eslint-disable react/prop-types */
import classes from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={classes["error-content"]}>
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMessage;
