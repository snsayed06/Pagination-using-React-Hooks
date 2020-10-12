import React from "react";
// import { FaFileExcel } from "react-icons/fa";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // marginTop:0,
    // marginBottom:0,
    // marginRight:10,
    // marginLeft:10
    // margin: 0 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const contentStyle ={
    display:"flex",
    justifyContent: "space-between",
    color: bgcolor,
  }

  return (
    <>
    <div style={contentStyle}>
      <p>CSS</p>
      <p>75%</p>
    </div>
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
    </>
  );
};

export default ProgressBar;
