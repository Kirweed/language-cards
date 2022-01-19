import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DashboardTemplate from './DashboardTemplate';

const AuthNavigateTemplate = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<DashboardTemplate/>}/>
            <Route path="/*" element={<Navigate to="/dashboard" />}/>
        </Routes>
    </BrowserRouter>
);

export default AuthNavigateTemplate;