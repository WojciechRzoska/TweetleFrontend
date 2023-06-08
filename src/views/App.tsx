import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setUser } from 'store/api/userSlice';
import { AuthProvider } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import AuthenticatedApp from './AuthenticatedApp';

import NoAuthenicatedApp from './NoAuthenicatedApp';

const App = () => {
  const authToken = useSelector((state: RootState) => state.authUser.token);

  useEffect(() => {
    console.log(authToken);
  });
  const dispatch = useDispatch();

  return authToken ? <AuthenticatedApp /> : <NoAuthenicatedApp />;
};

export default App;
