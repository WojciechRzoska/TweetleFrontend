import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn/SignIn';

const NoAuthenicatedApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />

      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default NoAuthenicatedApp;
