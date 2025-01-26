import { Home } from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../../components/navbar/NavBar";
import Products from "../Products/Products";

export type Tab = "Home" | "Products";

const Homepage = () => {
  const [tab, setTab] = useState<Tab>("Home");
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar tab={tab} setTab={setTab} setSearch={setSearch} />
      {tab == "Home" && search === "" ? (
        <Home />
      ) : (
        <Products searchValue={search} />
      )}
    </>
  );
};

export default Homepage;
