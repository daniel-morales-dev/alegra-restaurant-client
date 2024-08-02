import { IRecipe } from "./recipe.interface.ts";

export interface IRecipeStatus {
  action: string;
  uuid: string;
  status: "pending" | "finished";
  recipes: IRecipe[];
}
