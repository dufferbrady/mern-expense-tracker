import React, { useContext } from "react";
import "./App.css";

// import Modal from "./components/UI/Modal/Modal";

import Paper from "./components/Paper/Paper";
import { GlobalProvider } from "./context/GlobalState";
import { GlobalContext } from "./context/GlobalState";

function App() {
  // const { modal } = useContext(GlobalContext);
  return (
    <div className="App">
      <div className="App-header">
        <GlobalProvider>
          <Paper />
          {/* <Modal style={{ display: "absolute" }} show={modal}>
            Hey There
          </Modal> */}
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
