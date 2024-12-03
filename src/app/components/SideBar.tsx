import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {
  menus: Menu[];
};

const SideBar = (props: Props) => {
  const { menus } = props;
  return (
    <Box sx={{ width: 240, padding: 2, backgroundColor: "#eee" }}>
      <List>
        {menus.map((menu, index) => (
          <ListItem key={index}>
            <Link href={menu.path}>
              <ListItemButton>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
