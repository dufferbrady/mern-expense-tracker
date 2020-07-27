import React, { useContext, useEffect, useState } from "react";

import "../../App.css";
import Modal from "../UI/Modal/Modal";
import Balance from "../Balance/Balance";
import Breakdown from "../Breakdown/Breakdown";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import EditTransaction from "../EditTransaction/EditTransaction";
import Loader from "../UI/Loader/Loader";

import { GlobalContext } from "../../context/GlobalState";

export default function Paper() {
  const {
    modal,
    showModal,
    getTransactions,
    newTransaction,
    loading,
  } = useContext(GlobalContext);

  const [stateLoading, setStateLoading] = useState(loading);

  useEffect(() => {
    setTimeout(() => getTransactions(), 2000);
    // eslint-disable-next-line
  }, [newTransaction]);

  useEffect(() => {
    setStateLoading(loading);
    // eslint-disable-next-line
  }, [loading]);

  const expenseTracker = !stateLoading ? (
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
  ) : (
    <div className="Loader_Container">
      <Loader height={"100px"} width={"100px"} marginBottom={"20px"} />
      Loading...
    </div>
  );
  return (
    <>
      {expenseTracker}
      <Modal
        style={{ display: "absolute" }}
        show={modal}
        cancelModal={() => showModal(false)}
      >
        <EditTransaction />
      </Modal>
    </>
  );
}
