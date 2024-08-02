import { IRecipe } from "../../interfaces/recipe.interface.ts";
import { IKitchenOrder } from "../../interfaces/kitchenOrder.interface.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipeStatus } from "../../interfaces/recipeStatus.interface.ts";

type KitchenStateType = {
  recipes: IRecipe[];
  kitchenOrders: IKitchenOrder[];
  messageRecipe: IRecipeStatus | null;
};

const initialState: KitchenStateType = {
  recipes: [],
  kitchenOrders: [],
  messageRecipe: null,
};

export const kitchenSlice = createSlice({
  name: "kitchen",
  initialState,
  reducers: {
    updateKitchenOrders: (state, action: PayloadAction<IKitchenOrder[]>) => {
      state.kitchenOrders = action.payload;
    },
    setMessageRecipe: (state, action: PayloadAction<IRecipeStatus>) => {
      state.messageRecipe = action.payload;
    },
    setRecipes: (state, action: PayloadAction<IRecipe[]>) => {
      state.recipes = action.payload;
    },
  },
});

export const { updateKitchenOrders, setMessageRecipe, setRecipes } =
  kitchenSlice.actions;
export default kitchenSlice.reducer;
