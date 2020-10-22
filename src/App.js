import React from "react";
//Pagination
import Pagination from "./components/Pagination";
//Table
import Table from "./components/Table/Table";
//Accordion
import Accordion from "./components/Accordion";
// Progress Bar
import ProgressBar from "./components/ProgressBar";
// Star Rating
import Star from "./components/StarRating";

//CSS
import "./App.css";

const App = () => {
  return (
    <div className='container mt-5'>
      <Pagination />
      <Table />
      <Accordion />
      <ProgressBar />
      <Star />
    </div>
  );
};

export default App;
