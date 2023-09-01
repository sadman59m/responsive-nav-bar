/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import classes from "./CryptoList.module.css";
import CryptoListItem from "./CryptoListItem";

const CryptoList = ({ cryptoCoinData }) => {
  return (
    <div className={classes["crypto-list-main"]}>
      <div className={classes["crypto-list-header"]}>
        <h1> Cypto Coins </h1>
      </div>
      <div className={classes["crypto-list-item-body"]}>
        <CryptoListItem name="bit coin" imageUrl="imgUrl" price="$15.99" />
        <CryptoListItem name="bit coin" imageUrl="imgUrl" price="$15.99" />
      </div>
    </div>
  );
};

export default CryptoList;
