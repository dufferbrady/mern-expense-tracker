import React from "react";

import "../../../App.css";

export default function Backdrop({ show, click }) {
  return (
    <div>{show ? <div className="Backdrop" onClick={click}></div> : null}</div>
  );
}
