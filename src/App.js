import React from "react";
import "./App.css";

import Paper from "./components/Paper/Paper";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <GlobalProvider>
          <Paper />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
