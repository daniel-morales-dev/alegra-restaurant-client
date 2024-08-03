import {
  useGetIngredientsQuery,
  useGetShoppingHistoryQuery,
} from "../../store/apis/wareHouse.api.ts";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
  setIngredients,
  setShoppingHistory,
} from "../../store/slices/wareHouse.slice.ts";
import { RootState } from "../../store/store.ts";
import moment from "moment/moment";

const WareHouse = () => {
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector(
    (state: RootState) => state.wareHouse.ingredients,
  );

  const history = useAppSelector(
    (state: RootState) => state.wareHouse.shoppingHistory,
  );

  const { data: dataIngredients } = useGetIngredientsQuery(undefined, {
    pollingInterval: 5000,
  });

  const { data: dataShoppingHistory } = useGetShoppingHistoryQuery(
    undefined,
    {},
  );

  useEffect(() => {
    if (dataIngredients?.length) dispatch(setIngredients(dataIngredients!));
  }, [dataIngredients, dispatch]);

  useEffect(() => {
    if (dataShoppingHistory?.length)
      dispatch(setShoppingHistory(dataShoppingHistory!));
  }, [dataShoppingHistory, dispatch]);

  return (
    <section className="container-warehouse">
      <header>
        <h2>Bodega</h2>
      </header>
      <section className="main-container">
        <section className="main-container__ingredients">
          <h3 className={"title"}>Ingredientes</h3>
          <div className="container-ingredients">
            {ingredients?.map((ingredient) => (
              <div className={"card-ingredient"} key={ingredient.id}>
                <h4>{ingredient.name}</h4>
                <p>Cantidad: {ingredient.quantity}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="main-container__history">
          <h3 className={"title"}>Historial de compras</h3>
          <div className="container-ingredients">
            {history?.map((shop) => (
              <div className={"card-ingredient"} key={shop.id}>
                <h4>Compra #{shop.id}</h4>
                <p>Alimento comprado: {shop.ingredientName}</p>
                <p>Cantidad: {shop.quantity}</p>
                <p>
                  Fecha de compra:{" "}
                  {moment(shop.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default WareHouse;
