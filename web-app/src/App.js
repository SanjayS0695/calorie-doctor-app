import { Switch } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import Dashboard from './pages/DashBoard/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Authentication />} />
                <Route
                    exact
                    path="/about"
                    element={<Authentication currentPage="about" />}
                />
                <Route
                    exact
                    path="/login"
                    element={<Authentication currentPage="login" />}
                />
                <Route
                    exact
                    path="/signUp"
                    element={<Authentication currentPage="signUp" />}
                />

                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
