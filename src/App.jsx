import { useEffect, useState } from "react";
import money from "./img/money.png";
import "./App.css";
import Currency from "./components/Currency";

function App() {
  const [currency, setCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [checkFromCurrency, setCheckFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (checkFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrency([...Object.keys(data.rates)]);
        setExchangeRate(data.rates[toCurrency]);
      })
      .catch((error) => console.log("Something went wrong", error));
  }, [fromCurrency, toCurrency]);

  const amountFromCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(true); //check ว่าใส่ตัวเลขจากต้นทางหรืิอปลายทาง
  };

  const amountToCurrency = (e) => {
    setAmount(e.target.value);
    setCheckFromCurrency(false); //check ว่าใส่ตัวเลขจากต้นทางหรืิอปลายทาง
  };

  return (
    <div className="h-screen bg-gray flex flex-col justify-center items-center border">
      <img src={money} alt="logo" className="w-80 mb-12" />
      <h1 className="text-3xl font-black mb-5">แอพแปลงสกุลเงิน (API)</h1>
      <div className="flex flex-col items-center w-6/12">
        <Currency
          currency={currency}
          selectCurrency={fromCurrency}
          changeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={amountFromCurrency}
        />
        <div className="ml-9 text-3xl font-extrabold"> = </div>
        <Currency
          currency={currency}
          selectCurrency={toCurrency}
          changeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={amountToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
