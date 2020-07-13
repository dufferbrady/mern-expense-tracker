import React, { useContext } from "react";

import "../../App.css";
import Modal from "../UI/Modal/Modal";
import Balance from "../Balance/Balance";
import Breakdown from "../Breakdown/Breakdown";
import AddTransaction from "../AddTransaction/AddTransaction";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import { GlobalContext } from "../../context/GlobalState";

export default function Paper() {
  const { modal, showModal } = useContext(GlobalContext);
  return (
    <>
      <Modal
        style={{ display: "absolute" }}
        show={modal}
        cancelModal={() => showModal(false)}
      >
        Hey There
      </Modal>
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
    </>
  );
}
