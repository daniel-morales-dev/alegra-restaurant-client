export interface IRecipe {
  id: number;
  name: string;
  recipeIngredients: IRecipeIngredients[];
}

export interface IRecipeIngredients {
  id: number;
  recipeId: number;
  ingredientId: number;
  quantity: number;
  name?: string;
}
