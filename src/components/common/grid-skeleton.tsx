import { Grid, Skeleton } from "@mui/material";
import React from "react";

interface props {
  times: number;
}

const GridSkeleton: React.FunctionComponent<props> = ({ times }) => {
  const generateArray = (length: number) => {
    var arr = [];

    for (var i = 0; i < length; i++) {
      arr.push(i);
    }

    return arr;
  };

  return generateArray(times)?.map((data: number) => (
    <Grid item xs={12} md={4} key={data}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={72}
        sx={{ borderRadius: "4px" }}
      />
    </Grid>
  ));
};

export default GridSkeleton;
