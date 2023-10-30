import { useEffect, useState } from "react";
import money from "./img/money.png";
import "./App.css";
import Currency from "./components/Currency";

function App() {
  const url = `https://api.exchangerate-api.com/v4/latest/USD`;

  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrency([...Object.keys(data.rates)]));
  }, []);

  return (
    <div className="h-screen bg-gray flex flex-col justify-center items-center border">
      <img src={money} alt="logo" className="w-80 mb-12" />
      <h1 className="text-3xl font-black mb-5">แอพแปลงสกุลเงิน (API)</h1>
      <div className="flex flex-col items-center w-6/12">
        <Currency currency={currency} />
        <div className="ml-9 text-3xl font-extrabold"> = </div>
        <Currency currency={currency} />
      </div>
    </div>
  );
}

export default App;
