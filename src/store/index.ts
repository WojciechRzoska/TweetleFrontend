import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './api/userSlice';

export const store = configureStore({
  reducer: {
    authUser: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
