import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortParam: "default",
  searchText: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeSortParam, changeSearchText } = filterSlice.actions;