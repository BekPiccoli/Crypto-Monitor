const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
export const USDBitcoinPrice = async () => {
  const response = await fetch(URL);
  const Apidata = await response.json();
  const getBtcUsdValue = Apidata.bpi.USD.rate;
  const filterNum = Number(getBtcUsdValue.replace(/[^\d.]/g, ""));
  const truncatedNum = Math.floor(filterNum);
  const formattedToString = truncatedNum.toLocaleString("en-US").concat(".00");
  return formattedToString;
};
export const EURBitcoinPrice = async () => {
  const response = await fetch(URL);
  const Apidata = await response.json();
  const getBtcEurValue = Apidata.bpi.EUR.rate;
  const filterNum = Number(getBtcEurValue.replace(/[^\d.]/g, ""));
  const truncatedNum = Math.floor(filterNum);
  const formattedToString = truncatedNum.toLocaleString("en-US").concat(".00");
  return formattedToString;
};
