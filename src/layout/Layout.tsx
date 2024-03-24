import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Paper } from "@mui/material";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <div className={"layout"}>
      <Paper elevation={5} className={"app-header"}>
        <Header />
      </Paper>

      <Paper
        sx={{ width: 320, maxWidth: "100%" }}
        className={"app-content"}
        elevation={5}
      >
        <Navbar />
      </Paper>

      <Paper elevation={5} className={"app-footer"}>
        <Footer />
      </Paper>
    </div>
  );
}

export default Layout;
