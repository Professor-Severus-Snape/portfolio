import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isOpen: boolean;
  currentItemIndex: number;
}

const initialState: IInitialState = {
  isOpen: false,
  currentItemIndex: 0,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    setCurrentItemIndex: (state, { payload }) => {
      state.currentItemIndex = payload;
    },
  },
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectCurrentItemIndex: (state) => state.currentItemIndex,
  },
});

export const { openMenu, closeMenu, setCurrentItemIndex } = menuSlice.actions;
export const { selectIsOpen, selectCurrentItemIndex } = menuSlice.selectors;

export default menuSlice.reducer;
