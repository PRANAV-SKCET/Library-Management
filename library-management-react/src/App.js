import './App.css';
import { AuthContext } from './components/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OpeningPage from './components/OpeningPage';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
import AdminNavbar from './components/AdminNavbar';
import AddMembership from './components/AddMembership';
import DeleteBooks from './components/DeleteBooks';
import AddBooks from './components/AddBooks';
import DelayedSubmissions from './components/DelayedSubmissions';
import CheckOutBooks from './components/CheckOutBooks';
import SearchBooks from './components/SearchBooks';
import ApplyMembership from './components/ApplyMembership';
import CheckIn from './components/CheckIn';
import CheckOut from './components/CheckOut';
import Members from './components/Members';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    const savedState = localStorage.getItem('isAdminLoggedIn');
    return savedState === 'true';
  });

  const [id, setId] = useState(() => {
    const savedId = localStorage.getItem('id');
    return savedId ? parseInt(savedId, 10) : 1;
  });
  
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
  }, [isAdminLoggedIn]);

  useEffect(() => {
    localStorage.setItem('id', id);
  }, [id]);


  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn, id, setId }}>
      <div>
        <Router>
          {isAdminLoggedIn && <AdminNavbar />}
          <Routes>
            <Route path="/" element={<OpeningPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/searchBooks" element={<SearchBooks />} />
            <Route path="/applyMembership" element={<ApplyMembership />} />
            <Route path="/checkIn" element={<CheckIn />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/addMembership" element={<AddMembership />} />
            <Route path="/addBooks" element={<AddBooks />} />
            <Route path="/deleteBooks" element={<DeleteBooks />} />
            <Route path="/checkOutBooks" element={<CheckOutBooks />} />
            <Route path="/delayedSubmissions" element={<DelayedSubmissions />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
