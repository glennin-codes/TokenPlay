

import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./Footer";

const Persist= () => {
  return (
    <div style={{ maxWidth: "100%" }}>
     
      <AppBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Persist;
