import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../landingUI/Pages/Home";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ThemeProvider from "../landingUI/layout/theme/ThemeProvider";
import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";
import AddUser from "../adminPanel/pages/user/add/AddUser";
import AuthLayout from "./AuthLayout";
import PublicLayout from "./PublicLayout";
import UserView from "../adminPanel/pages/user/view/UserView";

function Router() {
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
                  <Route path="" element={<Dashboard />} />
                  <Route path="user/add" element={<AddUser />} />
                  <Route path="user/view" element={<UserView />} />
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