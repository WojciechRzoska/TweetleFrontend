import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './Singup/Signup';
import SignIn from './SignIn/SignIn';

const NoAuthenicatedApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default NoAuthenicatedApp;
