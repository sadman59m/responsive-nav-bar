/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CardPrimary from "../UI/CardPrimary";

import classes from "./CryptoListItem.module.css";

/* eslint-disable no-unused-vars */
const CryptoListItem = ({ name, imageUrl, price }) => {
  return (
    <>
      <CardPrimary className={classes["crypto-item-card"]}>
        <div className={classes["crypto-item-header"]}>
          <h3>{name}</h3>
        </div>
        <div className={classes["crypto-item-body"]}>
          <img
            src="https://st3.depositphotos.com/1311476/17107/i/450/depositphotos_171075154-stock-photo-golden-bitcoin-souvenir-coin.jpg"
            alt=""
          />
        </div>
        <div className={classes["crypto-item-footer"]}>
          <h3>{price}</h3>
        </div>
      </CardPrimary>
    </>
  );
};

export default CryptoListItem;
