import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../landingUI/layout/Footer";
import Home from "../landingUI/Pages/Home";
import Header from "../landingUI/layout/header/Header";
import DrawerNavbar from "../landingUI/layout/drawerNavbar/DrawerNavbar";
import GoToTop from "../landingUI/component/GoToTop";
import ScrollUp from "../landingUI/component/ScrollUp";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ThemeProvider from "../landingUI/layout/theme/ThemeProvider";
import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <ThemeProvider>
              <GoToTop />
              <Header />
              <DrawerNavbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logIn" element={<Login />} />
                <Route path="/register" element={<Registration />} />
              </Routes>
              <ScrollUp />
              <Footer />
            </ThemeProvider>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ThemeProviderAdmin>
              <Drawer>
                <Routes>
                  <Route path="/admin" element={<Dashboard />} />
                </Routes>
              </Drawer>
            </ThemeProviderAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;