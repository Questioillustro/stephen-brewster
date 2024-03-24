import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import {
  DocumentScanner,
  SportsMartialArts,
  Widgets,
} from "@mui/icons-material";
import React from "react";

function Navbar() {
  return (
    <MenuList className={"nav-list"}>
      <MenuItem>
        <ListItemIcon>
          <DocumentScanner fontSize="large" />
        </ListItemIcon>
        <ListItemText>Resume</ListItemText>
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Widgets fontSize="large" />
        </ListItemIcon>
        <ListItemText>Widgets</ListItemText>
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <SportsMartialArts fontSize="large" />
        </ListItemIcon>
        <ListItemText>Katas</ListItemText>
      </MenuItem>
    </MenuList>
  );
}

export default Navbar;
