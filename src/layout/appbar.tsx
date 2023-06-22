import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const AppbarHeader = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography variant="h6" noWrap component="div" color="#fff">
            Cost Data (2021 Student Task)
          </Typography>
        </Link>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default AppbarHeader;
