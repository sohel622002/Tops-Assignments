import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: "123",
        name: "sohel",
        email: "test@gmail.com",
        password: "123",
      },
    ],
    currentUser: {},
    isAuthanticated: false,
  },
  reducers: {
    register: (state, action) => {
      state.users.push({ ...action.payload });
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user && user.password === password) {
        state.currentUser = { email: email, password: password };
        state.isAuthanticated = true;
      } else {
        state.isAuthanticated = false;
      }
    },
  },
});

export const { register, login } = userSlice.actions;

export default userSlice.reducer;
