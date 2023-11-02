import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router className="main-container">
        <Navbar />
      </Router>

          


    </div>
  );
}

export default App;
