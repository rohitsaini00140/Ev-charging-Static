import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Component/Footer"
import Home from './Pages/Home'
import Header from './Component/header/Header';

function App() {
  return (
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
