export interface IShoppingHistory {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  ingredientId: number;
  ingredientName: string;
  quantity: number;
}
