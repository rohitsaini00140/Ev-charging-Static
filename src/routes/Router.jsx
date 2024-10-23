import { BrowserRouter, Routes, Route } from "react-router-dom";
// import all component for landing page
import { Home, Login, Registration, ContactUs, BlogPage, AuthLayout, Services, PublicLayout, ThemeProvider, About } from "./LandingRouteImports.jsx"
// import all component for Admin panel
import {
  ThemeProviderAdmin,
  Drawer,
  Dashboard,
  AddOrUpdateUser,
  UserView,
  AddOrUpdateClusters,
  ClustersView,
  AddOrUpdateRoles,
  RoleView,
  AddPermissions,
  PermissionView,
  PermissionsToRole,
  AddOrUpdatePermissionsToRole,
  AddOrUpdateProject,
  ProjectView,
  AddOrUpdateDevice,
  DeviceView
}
  from "./AdminRouteImports.jsx"

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
          <Route path="/blogs" element={< BlogPage />} />
          <Route path="/services" element={< Services />} />
          <Route path="/about" element={< About />} />
        </Route>
        <Route
          element={
            <ThemeProvider>
              <AuthLayout />
            </ThemeProvider>
          }
        >
          <Route path="/logIn" element={<Login />} />
          {/* <Route path="/register" element={<Registration />} /> */}
        </Route>
        <Route
          path="/admin/*"
          element={
            <ThemeProviderAdmin>
              <Drawer>
                <Routes>
                  <Route path="/" element={<Dashboard />} />

                  <Route path="/user/add" element={<AddOrUpdateUser />} />
                  <Route path="/user/view" element={<UserView />} />
                  <Route path="/user/update/:id" element={<AddOrUpdateUser />} />

                  <Route path="/cluster/add" element={<AddOrUpdateClusters />} />
                  <Route path="/cluster/view" element={<ClustersView />} />
                  <Route path="/cluster/update/:id" element={<AddOrUpdateClusters />} />

                  <Route path="/role/add" element={<AddOrUpdateRoles />} />
                  <Route path="/role/view" element={<RoleView />} />
                  <Route path="/role/update/:id" element={<AddOrUpdateRoles />} />

                  <Route path="/permission/add" element={<AddPermissions />} />
                  <Route path="/permission/view" element={<PermissionView />} />
                  <Route path="/roles&Permissions/permissionsToRole" element={<PermissionsToRole />} />
                  <Route path="" element={<AddOrUpdatePermissionsToRole />} />

                  <Route path="/project/add" element={<AddOrUpdateProject />} />
                  <Route path="/project/update/:id" element={<AddOrUpdateProject />} />
                  <Route path="/project/view" element={<ProjectView />} />

                  <Route path="/device/add" element={<AddOrUpdateDevice />} />
                  <Route path="/device/view" element={<DeviceView />} />
                  <Route path="/device/update/:id" element={<AddOrUpdateDevice />} />
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