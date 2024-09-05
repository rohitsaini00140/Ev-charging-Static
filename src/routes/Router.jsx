import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from '../layout/Footer';
import Home from '../Pages/Home';
import Header from "../layout/header/Header"
import DrawerNavbar from "../layout/drawerNavbar/DrawerNavbar";
import GoToTop from "../component/GoToTop";
import ScrollUp from "../component/ScrollUp";
import Login from "../Pages/logIn/LogIn";

function Router() {

  return (
    <BrowserRouter>
      <GoToTop />
      <Header />
      <DrawerNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<Login />} />

      </Routes>
      <ScrollUp />
      <Footer />
    </BrowserRouter>
  )
}

export default Router;