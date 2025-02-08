import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';
import CreateAnnounce from './CreateAnnounce';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createAnnounce" element={<CreateAnnounce />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
