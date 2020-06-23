import React from "react";

import "../../App.css";
import Balance from "../Balance/Balance";

export default function Paper() {
  return (
    <div className="Paper">
      <div className="Paper-SideA">
        <Balance />
        <div>Account Breakdown</div>
        <div>Add Transaction</div>
      </div>
      <div className="Paper-SideB">
        <div>Recent Transactions</div>
      </div>
    </div>
  );
}
