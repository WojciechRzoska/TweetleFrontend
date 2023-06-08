import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SignInForm from 'components/organisms/SignInForm/SignInForm';
import MainBoard from './MainBoard/MainBoard';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/test" element={<SignInForm />} />
        <Route path="/home" element={<MainBoard />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
