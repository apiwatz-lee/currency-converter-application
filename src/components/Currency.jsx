import React from "react";

const Currency = ({ currency }) => {
  return (
    <div className="mt-2">
      <select className="border">
        {currency.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="border text-center rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default Currency;
