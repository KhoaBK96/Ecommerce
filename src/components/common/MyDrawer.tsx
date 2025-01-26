import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export type DrawerBtn = {
  key: string,
  icon: React.ReactNode,
  label: string
}

export type DrawerItem = DrawerBtn

type MyDrawerProps = Omit<DrawerProps, 'onClose'> & {
  onClose: () => void,
  onSelect: (key : string) => void,
  items: DrawerItem[]
}
export const MyDrawer: React.FC<MyDrawerProps> = ({
  open,
  onClose,
  onSelect,
  items,
  ...other
}) => {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => onClose()}>
      <List>
        {items.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton onClick={() => onSelect(item.key)}>
              <ListItemIcon>              
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />    
    </Box>
  );

  return (
      <Drawer open={open} onClose={onClose} {...other}>
        {DrawerList}
      </Drawer>
  );
};

export default MyDrawer;
