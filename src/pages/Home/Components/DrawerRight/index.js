import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";
import DesignBoard from "./DesignBoard";

import List from "@mui/material/List";

const DrawerRight = ({ printComponentRef }) => {
  const drawerWidth = 250;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={true}
    >
      <List
        sx={{
          mt: "30%",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <DesignBoard printComponentRef={printComponentRef} />
      </List>
    </Drawer>
  );
};

export default DrawerRight;
