import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
