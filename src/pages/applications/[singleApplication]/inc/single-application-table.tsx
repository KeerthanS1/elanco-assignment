import CostDataTable from "@/components/modules/cost-data-table";
import { Box } from "@mui/material";
import React from "react";

interface props {
  data: any;
}

const SingleApplicationTable: React.FunctionComponent<props> = ({ data }) => {
  return (
    <Box height="100%">
      {/* Common table used to display the data */}
      <CostDataTable data={data} />
    </Box>
  );
};

export default SingleApplicationTable;
