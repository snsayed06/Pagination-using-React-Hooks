import React, { useState, useEffect } from "react";
import axios from "axios";
import Datatable from "./datatable";

const Table = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["state"]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://devmentor.live/api/examples/contacts?api_key=b7c58b"
      );
      setData(res.data.slice(0, 15));
    };

    fetchPosts();
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  console.log(columns);
  return (
    <div>
      <div>
        <input type='text' value={q} onChange={(e) => setQ(e.target.value)} />
        {columns &&
          columns.map((column) => (
            <label>
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
};

export default Table;
