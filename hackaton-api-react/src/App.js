import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';
import CreateAnnounce from './CreateAnnounce';
import Desktop from './desktop';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/Announce" element={<Home />} />
          <Route path="/createAnnounce" element={<CreateAnnounce />} />
          <Route path='/' element={<Desktop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
