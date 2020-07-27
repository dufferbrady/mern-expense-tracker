import React from "react";

import "../../../App.css";

const spinner = ({ height, width, marginBottom }) => (
  <div
    style={{
      height,
      width,
      marginBottom,
    }}
    className="Loader"
  >
    Loading...
  </div>
);

export default spinner;
