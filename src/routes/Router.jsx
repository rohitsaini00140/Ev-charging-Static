import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../landingUI/Pages/Home";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";
import AddUser from "../adminPanel/pages/user/add/AddUser";
import AuthLayout from "./AuthLayout";
import PublicLayout from "./PublicLayout";
import UserView from "../adminPanel/pages/user/view/UserView";
import ThemeProvider from "../landingUI/layout/theme/ThemeProvider";
import AddOrganization from "../adminPanel/pages/organization/add/AddOrganization";
import OrganizationView from "../adminPanel/pages/organization/view/OrganizationView";
import AddRoles from "../adminPanel/pages/roles&Permissions/roles/add/AddRoles";
import RoleView from "../adminPanel/pages/roles&Permissions/roles/view/RoleView";
import AddPermissions from "../adminPanel/pages/roles&Permissions/permissions/add/AddPermissions";
import PermissionView from "../adminPanel/pages/roles&Permissions/permissions/view/PermissionView";
import AddZone from "../adminPanel/pages/zone/add/AddZone";
import ZoneView from "../adminPanel/pages/zone/view/ZoneView";
import PermissionsToRole from "../adminPanel/pages/roles&Permissions/permissionsToRole/PermissionsToRole";

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

        <Route
          path="/admin/*"
          element={
            <ThemeProviderAdmin>
              <Drawer>
                <Routes>
                  <Route path="" element={<Dashboard />} />
                  <Route path="/user/add" element={<AddUser />} />
                  <Route path="/user/view" element={<UserView />} />

                  <Route path="/organization/add" element={<AddOrganization />} />
                  <Route path="/organization/view" element={<OrganizationView />} />

                  <Route path="/role/add" element={<AddRoles />} />
                  <Route path="/role/view" element={<RoleView />} />

                  <Route path="/permission/add" element={<AddPermissions />} />
                  <Route path="/permission/view" element={<PermissionView />} />

                  <Route path="/roles&Permissions/permissionsToRole" element={<PermissionsToRole />} />

                  <Route path="/zone/add" element={<AddZone />} />
                  <Route path="/zone/view" element={<ZoneView />} />
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