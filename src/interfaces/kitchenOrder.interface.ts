export interface IKitchenOrder {
  id: number;
  orderUuid: string;
  createdAt: Date;
  recipe: {
    id: number;
    name: string;
  };
}
