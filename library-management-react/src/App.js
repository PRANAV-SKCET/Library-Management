import './App.css';
import {AuthContext} from './components/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import OpeningPage from './components/OpeningPage';
import Admin from './components/Admin';
import Member from './components/Member'
import AdminHome from './components/AdminHome';
import AdminNavbar from './components/AdminNavbar';

function App() {
  const[isAdminLoggedIn,setIsAdminLoggedIn]=useState(false);

  return (

    <AuthContext.Provider 
    value={{
      isAdminLoggedIn,
      setIsAdminLoggedIn
    }}>

      <div>
        <Router>
        {isAdminLoggedIn && <AdminNavbar/>}
          <Routes>
              <Route path="/" element={<OpeningPage />} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/member" element={<Member />} />
              <Route path="/adminHome" element={<AdminHome />} />
          </Routes>
        </Router>
      </div>

    </AuthContext.Provider>

  );
}

export default App;
