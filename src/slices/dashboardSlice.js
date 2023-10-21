import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSidebar: false,
  users: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleShowSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    setUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { toggleShowSidebar, setUser } = dashboardSlice.actions;

export default dashboardSlice.reducer;
