import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router className="main-container">
        <Navbar />
        <Footer/>
        
      </Router>

          


    </div>
  );
}

export default App;
