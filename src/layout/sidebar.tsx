import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SourceIcon from "@mui/icons-material/Source";
import { useRouter } from "next/router";
const drawerWidth = 240;
const sidebarLinks = [
  {
    title: "Applications",
    icon: <AssignmentIcon />,
    link: "/applications",
  },
  {
    title: "Resources",
    icon: <SourceIcon />,
    link: "/resources",
  },
];

const Sidebar = () => {
  const router = useRouter();

  const handleGotoPage = (data: any) => {
    router.push(data?.link);
  };

  const getSelected = (link: string) => {
    if (router.pathname.includes(link)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {/* Nav Links list */}
        {sidebarLinks.map((data, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              handleGotoPage(data);
            }}
          >
            <ListItemButton
              selected={getSelected(data?.link)} // if selected
              sx={{
                borderLeft: "6px solid",
                borderColor: getSelected(data?.link)
                  ? "primary.main"
                  : "transparent",
                ".MuiTypography-root": {
                  fontWeight: getSelected(data?.link) ? 600 : 400,
                  color: getSelected(data?.link) ? "primary.main" : "default",
                },
              }}
            >
              <ListItemIcon>{data?.icon}</ListItemIcon>
              <ListItemText primary={data?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
