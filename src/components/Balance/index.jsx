import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        <span>
          {total < 0 ? "-" : ""}${Math.abs(total)}
        </span>
      </h1>
      v
    </>
  );
};

export default Balance;
