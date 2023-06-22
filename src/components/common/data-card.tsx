import { Card, Typography } from "@mui/material";
import React from "react";

interface props {
  title: string;
}

const DataCard: React.FunctionComponent<props> = ({ title }) => {
  // Pure component to display the item title
  return (
    <Card
      sx={{
        padding: "24px 12px",
        textAlign: "center",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="p"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {title && title?.replaceAll("-", " ")}
      </Typography>
    </Card>
  );
};

export default DataCard;
