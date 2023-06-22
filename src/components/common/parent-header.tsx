import { Box, Typography } from "@mui/material";
import React from "react";

interface props {
  title: string;
}

const ParentHeader: React.FunctionComponent<props> = ({ title }) => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e0e0e0",
        margin: "0 -24px",
        marginBottom: "18px",
        padding: "13px",
      }}
    >
      <Typography fontSize="24px" component="h2" variant="h2" fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

export default ParentHeader;
