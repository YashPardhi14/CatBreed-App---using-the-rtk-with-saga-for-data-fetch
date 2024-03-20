import { createSlice } from '@reduxjs/toolkit';

export interface catState {
  cat: any[];
  isLoading: boolean;
}

const initialState: catState = {
  cat: ['weee', 'are', 'samples'],
  isLoading: false,
};

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsFetch: (state) => {
      state.cat = ['f', 'r', 'ee'];
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cat = action.payload;
      state.isLoading = false;
    },
    getCatsError: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsError } = catSlice.actions;

export default catSlice.reducer;
