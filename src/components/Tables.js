import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Table } from "@mui/material/Table";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
// import Table from '@mui/material/Table';

const columns = [
  { field: "title", headerName: "Title", width: 300 },
  { field: "number", headerName: "Number" },
  { field: "state", headerName: "State" },
];

const Tables = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/bradtraversy/proshop_mern/issues")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "333%", marginLeft: "-28rem" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={12} world />
    </div>
  );
};

export default Tables;
