import bitcoinLogo from "../../assets/bitcoin.png";
import dollarLogo from "../../assets/dollar-symbol.png";
import realLogo from "../../assets/brasilReal.png";
import { Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  USDBitcoinPrice,
  EURBitcoinPrice,
} from "../../services/API/btcPrice.js";

function Home() {
  const [btcUsdValue, setBtcUsdValue] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const usdValue = await USDBitcoinPrice();
        setBtcUsdValue(usdValue);
      } catch (error) {
        console.error("Erro ao buscar dados do Bitcoin:", error);
      }
    };

    fetchBitcoinPrices();
  }, []);
  return (
    <>
      <div className=" w-screen h-screen flex flex-col justify-center ">
        <div className="flex flex-row w-full h-1/3 items-center justify-evenly bg-emerald-50">
          <Link to="/bitcoin">
            <div className="flex items-center justify-center flex-col w-40 h-40 bg-yellow-100 rounded-lg shadow-2xl ease-in duration-150 hover:scale-105">
              <img
                src={bitcoinLogo}
                alt="Bitcoin logo"
                className=" w-20 h-20 mb-2"
              />
              <a className="text-lg">${btcUsdValue}</a>
            </div>
          </Link>
          <div className="flex items-center justify-center flex-col w-40 h-40 bg-green-100 rounded-lg shadow-2xl ease-in duration-150 hover:scale-105">
            <img
              src={dollarLogo}
              alt="Dollar logo"
              className=" w-16 h-16 mb-2 "
            />
            {"Dollar"}
          </div>
        </div>
        <div className="flex flex-row w-full h-1/3 items-center justify-evenly bg-emerald-50">
          <div className="flex items-center justify-center flex-col w-40 h-40 bg-yellow-100 rounded-lg shadow-2xl ease-in duration-150 hover:scale-105">
            <img
              src={bitcoinLogo}
              alt="Bitcoin logo"
              className=" w-20 h-20 mb-2"
            />
            {"Bitcoin"}
          </div>
          <div className="flex items-center justify-center flex-col w-40 h-40 bg-green-200 rounded-lg shadow-2xl ease-in duration-150 hover:scale-105">
            <img src={realLogo} alt="Real logo" className=" w-16 h-16 mb-2 " />
            {"Reais"}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
