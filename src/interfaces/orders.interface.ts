import { IRecipe } from "./recipe.interface.ts";

export interface IOrder {
  uuid: string;
  status: "pending" | "in_kitchen" | "finished";
  created_at: Date;
  updated_at: Date;
  recipe?: IRecipe;
}
