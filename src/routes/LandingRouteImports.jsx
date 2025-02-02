// Landing Page Compoent import here
import Home from "../landingUI/Pages/Home";
import Login from "../landingUI/Pages/auth/logIn/LogIn";
import Registration from "../landingUI/Pages/auth/registration/Registration";
import ContactUs from "../landingUI/Pages/contact/ContactUs";
import BlogPage from "../landingUI/Pages/blogPage/BlogPage";
import Services from "../landingUI/Pages/services/Services";
import About from "../landingUI/Pages/about/About";
// export all the components here
import AuthLayout from "./AuthLayout";
import PublicLayout from "./PublicLayout";
import ThemeProvider from "../landingUI/layout/theme/ThemeProvider";

// export all the components here
export {
    Home,
    Login,
    Registration,
    About,
    ContactUs,
    BlogPage,
    Services,
    AuthLayout,
    PublicLayout,
    ThemeProvider
};