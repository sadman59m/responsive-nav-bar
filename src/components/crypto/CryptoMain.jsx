/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import classes from "./CryptoMain.module.css";

const CryptoMain = () => {
  const [cryptoCoinData, setCryptoCoinData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    (async () => {
      try {
        const jsonCoinData = await fetch(
          "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
            },
          }
        );
        const cryptoCoinData = await jsonCoinData.json();
        setCryptoCoinData(cryptoCoinData);
      } catch (err) {
        setIsError(true);
      }
    })();
  }, []);

  console.log(cryptoCoinData);

  const errorContent = <h3>Something went wrong! Try again later.</h3>;
  return (
    <>
      <main className={classes["crypto-main"]}>
        {!isError && <h3>Crypto Coin available</h3>}
        {isError && errorContent}
      </main>
    </>
  );
};

export default CryptoMain;
