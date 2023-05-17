import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const HomeSlice = createSlice({
  name: "counter",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGeneres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGeneres } = HomeSlice.actions;

export default HomeSlice.reducer;
