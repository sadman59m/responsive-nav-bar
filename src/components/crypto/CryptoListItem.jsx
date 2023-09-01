/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CardPrimary from "../UI/CardPrimary";

import classes from "./CryptoListItem.module.css";

/* eslint-disable no-unused-vars */
const CryptoListItem = ({ name, imageUrl, price }) => {
  return (
    <>
      <CardPrimary className={classes["crypto-item-card"]}>
        <div className={classes["crypto-item-image"]}>
          <img src={imageUrl} alt="Crypto coin image" />
        </div>
        <div className={classes["crypto-item-content"]}>
          <h3>{name}</h3>
          <p>{`$${price}`}</p>
        </div>
      </CardPrimary>
    </>
  );
};

export default CryptoListItem;
