/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import classes from "./CryptoList.module.css";
import CryptoListItem from "./CryptoListItem";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const CryptoList = ({ cryptoCoinData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);

  // ex: currPage = 2, itemPerPage = 10
  // lastIndex = 2 * 10 = 20
  // firstIndex = lastIndex - itemPerPage = 20 - 10 = 10
  // totalPageItmes = 10, 11, ....., 19 , 20 = in array [0-9] [10-19]
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;

  const currentPageItems = cryptoCoinData.slice(firstItemIndex, lastItemIndex);

  const totalItems = cryptoCoinData.length;
  return (
    <div className={classes["crypto-list-main"]}>
      <div className={classes["crypto-list-header"]}>
        <h1> Cypto Coins </h1>
      </div>
      <div className={classes["crypto-list-item-body"]}>
        {currentPageItems.map((item, index) => {
          return (
            <CryptoListItem
              key={index}
              name={item.name}
              imageUrl={item.image}
              price={item.current_price.toLocaleString()}
            />
          );
        })}
      </div>
      <div className={classes["crypto-list-pagination"]}>
        <Pagination
          totalItems={totalItems}
          itemPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CryptoList;
