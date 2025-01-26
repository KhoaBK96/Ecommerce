import React, { useState } from "react";
import SearchAppBar from "../../components/navbar/SearchAppBar";
import MyDrawer from "../../components/common/MyDrawer";
import Navbar from "../../components/navbar/NavBar";
import { Home } from "@mui/icons-material";
import Products from "./Products/Products";

export type Tab = "Home" | "Products";

const Homepage = () => {
  const [tab, setTab] = useState<Tab>("Home");

  return (
    <>
      <Navbar tab={tab} setTab={setTab} />
      {tab == "Home" ? <Home /> : <Products />}
    </>
  );
};

export default Homepage;
