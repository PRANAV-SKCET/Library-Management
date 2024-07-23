import './App.css';
import {AuthContext} from './components/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import OpeningPage from './components/OpeningPage';
import Admin from './components/Admin';
import Member from './components/Member'

function App() {
  return (

    <AuthContext.Provider 
    value={{}}>

      <div>
        <Router>
          <Routes>
              <Route path="/" element={<OpeningPage />} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/member" element={<Member />} />
          </Routes>
        </Router>
      </div>

    </AuthContext.Provider>

  );
}

export default App;
