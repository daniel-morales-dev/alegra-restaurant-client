import React from "react";
import { IRecipe } from "../../../interfaces/recipe.interface.ts";
import { StatusOrder } from "../../../constants/statusOrder.constant.ts";

type OrderCardProps = {
  uuid: string;
  status: "pending" | "in_kitchen" | "finished";
  recipe?: IRecipe;
};

const OrderCard: React.FC<OrderCardProps> = ({ uuid, status, recipe }) => {
  return (
    <div className={`card-order`}>
      <h3 className={"title"}>Order {uuid}</h3>
      <p>Estado de la orden {StatusOrder[status]}</p>
      {recipe && (
        <div className={`recipe`}>
          <h3>Plato de comida:</h3>
          <p>{recipe?.name}</p>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
