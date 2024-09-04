import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from './component/Footer';
import Home from './Pages/Home';
import Header from "./component/header/Header"
import { useEffect } from "react";
import ScrollUp from "./component/ScrollUp";

function App() {

  function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);
    return null;
  }

  return (
    //   <Router>
    //   <Routes>
    //    <Route path="/" element={<Home />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    <div>
      <BrowserRouter>
        <GoToTop />
        <Header />
        {/* <DrawerNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollUp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;