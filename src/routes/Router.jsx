import { BrowserRouter, Routes, Route } from "react-router-dom";
// import all component for landing page
import { Home, Login, Registration,ContactUs } from "./LandingUi"

import ThemeProviderAdmin from "../adminPanel/layouts/theme/ThemeProviderAdmin";
import Drawer from "../adminPanel/layouts/sidebar/Drawer";
import Dashboard from "../adminPanel/pages/dashboard/Dashboard";
import AddOrUpdateUser from "../adminPanel/pages/user/add/AddOrUpdateUser.jsx";
import AuthLayout from "./AuthLayout";
import PublicLayout from "./PublicLayout";
import UserView from "../adminPanel/pages/user/view/UserView";
import ThemeProvider from "../landingUI/layout/theme/ThemeProvider";
import OrganizationView from "../adminPanel/pages/organization/view/OrganizationView";
import AddRoles from "../adminPanel/pages/roles&Permissions/roles/add/AddRoles";
import RoleView from "../adminPanel/pages/roles&Permissions/roles/view/RoleView";
import AddPermissions from "../adminPanel/pages/roles&Permissions/permissions/add/AddPermissions";
import PermissionView from "../adminPanel/pages/roles&Permissions/permissions/view/PermissionView";
import AddOrUpdateZone from "../adminPanel/pages/zone/addOrUpdate/AddOrUpdateZone.jsx";
import ZoneView from "../adminPanel/pages/zone/view/ZoneView";
import PermissionsToRole from "../adminPanel/pages/roles&Permissions/permissionsToRole/PermissionsToRole";
import AddOrUpdateOrganization from "../adminPanel/pages/organization/addOrUpdate/AddOrUpdateOrganization";

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
          <Route path="/contactus" element={<ContactUs />} />
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
                  <Route path="/user/add" element={<AddOrUpdateUser />} />
                  <Route path="/user/view" element={<UserView />} />
                  <Route path="/organization/add" element={<AddOrUpdateOrganization />} />
                  <Route path="/organization/view" element={<OrganizationView />} />
                  <Route path="/organization/update/:id" element={<AddOrUpdateOrganization />} />
                  <Route path="/role/add" element={<AddRoles />} />
                  <Route path="/role/view" element={<RoleView />} />
                  <Route path="/permission/add" element={<AddPermissions />} />
                  <Route path="/permission/view" element={<PermissionView />} />
                  <Route path="/roles&Permissions/permissionsToRole" element={<PermissionsToRole />} />
                  <Route path="/zone/add" element={<AddOrUpdateZone />} />
                  <Route path="/zone/view" element={<ZoneView />} />
                  <Route path="/zone/update/:id" element={<AddOrUpdateZone />} />
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