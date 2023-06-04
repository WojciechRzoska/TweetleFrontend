import { Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SignIn from './SignIn/SignIn';
import MainBoard from './MainBoard/MainBoard';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<MainBoard />} />
      </Routes>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
