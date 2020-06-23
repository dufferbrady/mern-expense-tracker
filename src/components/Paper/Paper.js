import React from "react";

import "../../App.css";
import Balance from "../Balance/Balance";
import Breakdown from "../Breakdown/Breakdown";

export default function Paper() {
  return (
    <div className="Paper">
      <div className="Paper-SideA">
        <Balance />
        <Breakdown />
        <div>Add Transaction</div>
      </div>
      <div className="Paper-SideB">
        <div>Recent Transactions</div>
      </div>
    </div>
  );
}
