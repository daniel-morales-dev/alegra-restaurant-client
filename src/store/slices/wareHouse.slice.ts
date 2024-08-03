import { IIngredient } from "../../interfaces/ingredient.interface.ts";
import { IShoppingHistory } from "../../interfaces/shoppingHistory.interface.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WareHouseType = {
  ingredients: IIngredient[];
  shoppingHistory: IShoppingHistory[];
};

const initialState: WareHouseType = {
  ingredients: [],
  shoppingHistory: [],
};

export const wareHouseSlice = createSlice({
  name: "wareHouse",
  initialState,
  reducers: {
    setIngredients: (state, action: PayloadAction<IIngredient[]>) => {
      state.ingredients = action.payload;
    },
    setShoppingHistory: (state, action: PayloadAction<IShoppingHistory[]>) => {
      state.shoppingHistory = action.payload;
    },
  },
});

export const { setIngredients, setShoppingHistory } = wareHouseSlice.actions;

export default wareHouseSlice.reducer;
