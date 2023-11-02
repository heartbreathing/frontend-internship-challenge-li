import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';


function App () {
  return (
    <div className="App">
      <Router className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/products" element={<Products />} />          
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
