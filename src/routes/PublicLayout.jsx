import GoToTop from "../landingUI/component/GoToTop";
import Header from "../landingUI/layout/header/Header";
import Footer from "../landingUI/layout/Footer"
import DrawerNavbar from "../landingUI/layout/drawerNavbar/DrawerNavbar";
import { Outlet } from "react-router-dom";
import ScrollUp from "../landingUI/component/ScrollUp";

function PublicLayout() {
    return (
        <>
            <GoToTop />
            <Header />
            <DrawerNavbar />
            <Outlet />
            <ScrollUp />
            <Footer />
        </>
    );
}

export default PublicLayout;