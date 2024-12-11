import React, { useState, useEffect } from "react";
import {
  USDBitcoinPrice,
  EURBitcoinPrice,
} from "../../services/API/btcPrice.js";
import bitcoinLogo from "../../assets/bitcoin.png";
import { Link } from "react-router-dom";

function BitcoinData() {
  const [btcUsdValue, setBtcUsdValue] = useState(null);
  const [btcEurValue, setBtcEurValue] = useState(null);
  const [currentValue, setcurrentValue] = useState("USD");

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const usdValue = await USDBitcoinPrice();
        const eurValue = await EURBitcoinPrice();
        setBtcUsdValue(usdValue);
        setBtcEurValue(eurValue);
      } catch (error) {
        console.error("Erro ao buscar dados do Bitcoin:", error);
      }
    };

    fetchBitcoinPrices();
  }, []);

  const handleCurrencyToggle = () => {
    setcurrentValue((prevCurrency) => (prevCurrency === "USD" ? "EUR" : "USD"));
  };

  const displayedValue = currentValue === "USD" ? btcUsdValue : btcEurValue;
  const currencySymbol = currentValue === "USD" ? "USD" : "EUR";
  const currencyCoin = currentValue === "USD" ? "$" : "€";

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-32 flex items-center justify-evenly rounded-b-2xl bg-gradient-to-r from-yellow-200 to-yellow-100">
        <Link to="/">
          <div className="flex items-center justify-center flex-col w-24 h-24 bg-yellow-100 rounded-lg shadow-2xl">
            <img className="w-16 h-16" src={bitcoinLogo} alt="" />
          </div>
        </Link>
        <div className="w-52 h-14 flex justify-center items-center bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg">
          <p
            className="text-black text-2xl cursor-pointer"
            onClick={handleCurrencyToggle}
          >
            {currencyCoin} {displayedValue} {currencySymbol}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BitcoinData;
