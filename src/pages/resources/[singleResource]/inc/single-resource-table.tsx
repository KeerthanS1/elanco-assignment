import { Box } from "@mui/material";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CostDataTable from "@/components/modules/cost-data-table";

interface props {
  data: any;
}

const SingleResourceTable: React.FunctionComponent<props> = ({ data }) => {
  return (
    <Box>
      <CostDataTable data={data} />
    </Box>
  );
};

export default SingleResourceTable;
