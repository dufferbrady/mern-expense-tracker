import React from "react";

import "../../App.css";
import Balance from "../Balance/Balance";
import Breakdown from "../Breakdown/Breakdown";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function Paper() {
  return (
    <div className="Paper">
      <div className="Paper-SideA">
        <Balance />
        <Breakdown />
        <AddTransaction />
      </div>
      <div className="Paper-SideB">
        <TransactionHistory />
      </div>
    </div>
  );
}
