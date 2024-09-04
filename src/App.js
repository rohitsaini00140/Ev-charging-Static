<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from './component/Footer';
import Home from './Pages/Home';
import Header from "./component/header/Header"
import { useEffect } from "react";
import ScrollUp from "./component/ScrollUp";
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Component/Footer"
import Home from './Pages/Home'
import Header from './Component/header/Header';
>>>>>>> 54594b432c3695852b3c80bc6a02dfea10254dec

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
<<<<<<< HEAD
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
=======
    <>
    <Router>
    <Header/>  
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  </>
  );
}
export default App;
>>>>>>> 54594b432c3695852b3c80bc6a02dfea10254dec
