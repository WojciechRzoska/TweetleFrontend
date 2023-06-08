import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'store/api/userSlice';
import { RootState } from 'store';

export const AuthProvider = () => {
  const [token, setToken] = useState<string | null>(
    useSelector((state: RootState) => state.authUser.token)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(sessionStorage.getItem('APItoken'));
    // console.log(token);
  }, [token]);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:80/api/v1/login', {
        email,
        password,
      });
      dispatch(setUser(response.data.token));
      setToken(response.data.token);
      sessionStorage.setItem('APItoken', response.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  const authApi = () => {
    const createdApi = axios.create({
      baseURL: 'http://localhost:80',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return createdApi;
  };

  const signOut = async () => {
    await authApi()
      .post('/api/v1/logout')
      .then(() => {
        dispatch(setUser(null));
        sessionStorage.clear();
      })
      .catch((err) => console.log(err.response.data.message));

    localStorage.removeItem('token');
  };

  const api = () => {
    const createdApi = axios.create({
      baseURL: 'http://localhost:80',
      withCredentials: true,
    });

    return createdApi;
  };

  return {
    authApi,
    api,
    token,
    signIn,
    signOut,
  };
};
