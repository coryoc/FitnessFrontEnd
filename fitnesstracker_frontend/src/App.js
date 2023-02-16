
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Routines from './components/routines';
import User from './components/user';
import Activities from './components/activities';
import MyRoutines from './components/myroutines';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
                <Route
                    path='/'
                    element={<Home 
                    />}
                />
                <Route
                    path='/login'
                    element={<Login 
                    />}
                />
                <Route
                    path='/routines'
                    element={<Routines 
                    />}
                />
                <Route
                    path='/user'
                    element={<User 
                    />}
                />
                <Route
                    path='/activities'
                    element={<Activities 
                    />}
                />
                <Route
                    path='/myroutines'
                    element={<MyRoutines
                    />}
                />
        </Routes>
                
      </Router>
    </div>
  );
}

export default App;
