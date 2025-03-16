import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  selectCategory: string;
}

const initialState: CategoryState = {
  selectCategory: "Todas",
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectdCategory(state, action) {
      state.selectCategory = action.payload; // Atualiza a categoria
    },
  },
});

export const {setSelectdCategory} = CategorySlice.actions;

export default CategorySlice.reducer;
