import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
