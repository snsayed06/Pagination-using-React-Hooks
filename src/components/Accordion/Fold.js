import React from "react";
import "./styles.scss";

const Fold = ({ label, content, active, handle }) => {
  return (
    <div className='fold'>
      <button
        className={`fold_trigger ${active ? "open" : ""}`}
        onClick={handle}
      >
        {label}
      </button>
      <div key='content' className={`fold_content ${active ? "open" : ""}`}>
        {active ? content : null}
      </div>
    </div>
  );
};

export default Fold;
