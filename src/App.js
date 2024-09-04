import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import BlogCom from './Pages/Blog/BlogCom';

function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
    <BlogCom/>
    <Footer />
  </Router>
  );
}

export default App;
