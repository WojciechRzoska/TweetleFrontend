import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: sessionStorage.getItem('APItoken')
    ? sessionStorage.getItem('APItoken')
    : '',
};

const userSlice = createSlice({
  name: 'AuthUser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    logout: () => {},
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
