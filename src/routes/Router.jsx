import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "../landingUI/layout/Footer";
import Home from "../landingUI/Pages/Home";
import Header from "../landingUI/layout/header/Header";
import DrawerNavbar from "../landingUI/layout/drawerNavbar/DrawerNavbar";
import GoToTop from "../landingUI/component/GoToTop";
import ScrollUp from "../landingUI/component/ScrollUp";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";

const LayoutWithHeaderAndFooter = () => (
  <>
    <Header />
    <DrawerNavbar />
    <GoToTop />
    <main>
      <Outlet /> 
    </main>
    <ScrollUp />
    <Footer />
  </>
);
// Layout component for admin pages
const AdminLayout = () => (
  <>
    <Drawer />
    <main>
      <Outlet />
    </main>
  </>
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       {/* Protected routes with header and footer */}
          <Route>
          <Route element={<LayoutWithHeaderAndFooter />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        {/* Public routes without header and footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        {/* Admin routes */}
        <Route element={<ThemeProviderAdmin />}>
        <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
