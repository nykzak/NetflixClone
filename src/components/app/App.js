import React from 'react';
import './App.css';
import HomeScreen from '../homeScreen/HomeScreen';
import Login from '../loginScreen/LoginScreen';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "../api/firebase";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from "../../features/userSlice";
import ProfileScreen from '../profileScreen/ProfileScreen';

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (  
    <div className='App'>
    <Router>
    {!user ? (
      <Login />
    ): (
      <Routes>
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/" element={<HomeScreen />} />
      </Routes>
    )}
    
    </Router>
    </div>
  );
}

export default App;
