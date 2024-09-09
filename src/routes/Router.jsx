import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../landingUI/Pages/Home";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";
import AddUser from "../adminPanel/pages/user/addUser";
import AuthLayout from "./AuthLayout";
import PublicLayout from "./PublicLayout";

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
        <Route
          element={
            <ThemeProvider>
              <PublicLayout />
            </ThemeProvider>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          element={
            <ThemeProvider>
              <AuthLayout />
            </ThemeProvider>
          }
        >
          <Route path="/logIn" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ThemeProviderAdmin>
              <Drawer>
                <Routes>
                  <Route path="/admin" element={<Dashboard />} />
                  <Route path="/admin/addUser" element={<AddUser />} />
                </Routes>
              </Drawer>
            </ThemeProviderAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
