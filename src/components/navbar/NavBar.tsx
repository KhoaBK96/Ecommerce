import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InventoryIcon from "@mui/icons-material/Inventory";
import React, { useState } from "react";
import { Tab } from "../../page/homepage/Homepage";
import MyDrawer, { DrawerItem } from "../common/MyDrawer";
import SearchAppBar from "./SearchAppBar";

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
  setSearch: (searchValue: string) => void;
};
const Navbar: React.FC<NavbarProps> = ({ tab, setTab, setSearch }) => {
  const [open, setOpen] = useState(false);
  // onClose
  //   onSelect,
  //   items,
  return (
    <>
      <SearchAppBar
        toggleDrawer={() => setOpen((prevOpen) => !prevOpen)}
        setSearchValue={setSearch}
      />
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
