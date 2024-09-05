import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from './layout/Footer';
import Home from './Pages/Home';
import Header from "./layout/header/Header"
import DrawerNavbar from "./layout/drawerNavbar/DrawerNavbar";
import { useEffect } from "react";
import ScrollUp from "./component/ScrollUp";
import ThemeProvider from "./layout/theme/ThemeProvider";
import Router from "./routes/Router";

function App() {

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
