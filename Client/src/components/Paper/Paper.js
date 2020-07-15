import React, { useContext } from "react";

import "../../App.css";
import Modal from "../UI/Modal/Modal";
import Balance from "../Balance/Balance";
import Breakdown from "../Breakdown/Breakdown";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import EditTransaction from "../EditTransaction/EditTransaction";

import { GlobalContext } from "../../context/GlobalState";

export default function Paper() {
  const { modal, showModal } = useContext(GlobalContext);
  return (
    <>
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
