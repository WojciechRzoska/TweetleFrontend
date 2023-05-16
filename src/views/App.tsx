import { Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SignIn from './SignIn/SignIn';
import MainBoard from './MainBoard/MainBoard';

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<MainBoard />} />
      </Routes>
    </MainTemplate>
  );
};

export default App;
