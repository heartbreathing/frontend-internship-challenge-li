import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
About

function App () {
  return (
    <div className="App">
      <Router className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/products" element={<Products />} />          
          <Route path="/about" element={<About />} />          
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
