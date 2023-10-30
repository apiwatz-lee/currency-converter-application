import React from "react";

const Currency = ({
  currency,
  selectCurrency,
  changeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <div className="mt-2">
      <select
        value={selectCurrency} // to,from state
        onChange={changeCurrency} //set to from state
        className="border"
      >
        {currency.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="border text-center rounded-lg focus:outline-none"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
};

export default Currency;
