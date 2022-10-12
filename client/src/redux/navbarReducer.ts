import { createSlice } from '@reduxjs/toolkit';

type NavbarState = {
  navbar: string | null;
};

const initialState: NavbarState = {
  navbar: null,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    initNavbar: (state) => {
      state.navbar = null;
    },
  },
});

export type { NavbarState };
export const { setNavbar, initNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
