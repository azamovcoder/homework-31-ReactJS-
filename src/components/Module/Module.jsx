import React from "react";
import "./module.scss";

function Module({ children, width, close }) {
  return (
    <>
      <div onClick={() => close(false)} className="overlay"></div>
      <div style={{ width }} className="model">
        {children}
      </div>
    </>
  );
}

export default Module;
