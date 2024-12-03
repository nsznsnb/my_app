import {
  AppBar,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";

type Props = {
  menus: Menu[];
};

const Header = (props: Props) => {
  const { menus } = props;
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h1">VocaBuil</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
