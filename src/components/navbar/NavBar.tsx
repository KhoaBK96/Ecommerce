import React, { useState } from "react";
import SearchAppBar from "./SearchAppBar";
import MyDrawer, { DrawerItem } from "../common/MyDrawer";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Tab } from "../../page/homepage/Homepage";

const drawerItems: DrawerItem[] = [
  {
    key: "Home",
    icon: <HomeWorkIcon />,
    label: "Home",
  },
  {
    key: "Products",
    icon: <InventoryIcon />,
    label: "Products",
  },
];
type NavbarProps = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};
const Navbar: React.FC<NavbarProps> = ({ tab, setTab }) => {
  const [open, setOpen] = useState(false);
  // onClose
  //   onSelect,
  //   items,
  return (
    <>
      <SearchAppBar toggleDrawer={() => setOpen((prevOpen) => !prevOpen)} />
      <MyDrawer
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(key) => setTab(key as Tab)}
        items={drawerItems}
      />
    </>
  );
};

export default Navbar;
