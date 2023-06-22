import { Box } from "@mui/material";
import React, { useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CostDataFilters from "./cost-data-filters";

interface props {
  data: ApiData[];
}

interface ApiData {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}

const CostDataTable: React.FunctionComponent<props> = ({ data }) => {
  const gridRef: any = useRef();

  const columnDefs: any = [
    // coloum definations to display in the table
    { field: "ConsumedQuantity", sortable: true },
    { field: "Cost" },
    { field: "Date", sortable: true },
    { field: "MeterCategory" },
    { field: "ResourceGroup" },
    { field: "UnitOfMeasure", sortable: true },
    { field: "Location" },
    { field: "ServiceName", sortable: true },
  ];

  const onFilterTextBoxChanged = useCallback(() => {
    // filter through search
    gridRef.current!.api.setQuickFilter(
      (document.getElementById("filter-text-box") as HTMLInputElement).value
    );
  }, []);

  const onFilterCategory = (value: string) => {
    //filter through select dropdown
    gridRef.current!.api.setQuickFilter(value);
  };

  return (
    <Box>
      <CostDataFilters
        onFilterTextBoxChanged={onFilterTextBoxChanged}
        onFilterCategory={onFilterCategory}
        rowData={data}
      />
      <Box
        className="ag-theme-alpine"
        sx={{ height: "calc(100vh - 160px)", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          pagination
        />
      </Box>
    </Box>
  );
};

export default CostDataTable;
