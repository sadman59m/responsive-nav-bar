/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import classes from "./CryptoMain.module.css";
import CryptoList from "./CryptoList";
import ErrorMessage from "../UI/ErrorMessage";

const CryptoMain = () => {
  const [cryptoCoinData, setCryptoCoinData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const cryptoCoinData = await response.json();
        setCryptoCoinData(cryptoCoinData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  // console.log(cryptoCoinData);

  const errorContent = "Something went wrong! Try again later.";
  const loadingContent = <h3>Loading...</h3>;
  return (
    <>
      <section className={classes["crypto-section"]}>
        {!isLoading && isError && <ErrorMessage message={errorContent} />}
        <div className={classes["laoding-content"]}>
          {!isError && isLoading && loadingContent}
        </div>
        <div className={classes["laoding-content"]}>
          {!isError && !isLoading && cryptoCoinData.length === 0 && (
            <h3>No Crypto Coin Info Available Righ Now.</h3>
          )}
        </div>
        <div>
          {!isError && !isLoading && cryptoCoinData.length > 0 && (
            <CryptoList cryptoCoinData={cryptoCoinData} />
          )}
        </div>
      </section>
    </>
  );
};

export default CryptoMain;
