import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";
import AppbarHeader from "./appbar";

const Layout = (props: any) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Appbar */}
      <AppbarHeader />
      {/* Sidebar for navigation */}
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, mt: 5 }} component="main">
        {props?.children}
      </Box>
    </Box>
  );
};

export default Layout;
