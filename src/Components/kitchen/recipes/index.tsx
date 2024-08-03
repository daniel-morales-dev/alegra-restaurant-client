import {
  useGetRecipesQuery,
  useGetRecipesStatusQuery,
} from "../../../store/apis/kitchen.api.ts";
import { RootState } from "../../../store/store.ts";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import { useEffect, useRef } from "react";
import {
  setMessageRecipe,
  setRecipes,
} from "../../../store/slices/kitchen.slice.ts";

const Recipes = () => {
  const dispatch = useAppDispatch();
  const messageRecipe = useAppSelector(
    (state: RootState) => state.kitchen.messageRecipe,
  );
  const recipes = useAppSelector((state: RootState) => state.kitchen.recipes);

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const { data: recipesData } = useGetRecipesQuery(undefined);
  const {
    data: statusData,
    isLoading,
    refetch,
  } = useGetRecipesStatusQuery(String(messageRecipe?.uuid), {
    skip: !messageRecipe?.uuid,
  });

  useEffect(() => {
    if (recipesData) {
      dispatch(setMessageRecipe(recipesData));
    }
  }, [recipesData, dispatch]);

  useEffect(() => {
    if (messageRecipe?.status === "pending") {
      intervalIdRef.current = setInterval(() => {
        refetch();
      }, 5000);
    } else if (messageRecipe?.status === "finished") {
      dispatch(setRecipes(messageRecipe.recipes));
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [messageRecipe, refetch]);

  useEffect(() => {
    if (statusData) {
      dispatch(setMessageRecipe(statusData));
    }
  }, [statusData, dispatch]);

  return (
    <section className="container-recipes">
      <h2>Recetas disponibles</h2>
      <div className="container-cards">
        {isLoading ? (
          <h3>Cargando recetas</h3>
        ) : (
          recipes.map((recipe) => (
            <div className={"card"} key={`${recipe.id}-${recipe.name}`}>
              <h3 className={"card-name"}>{recipe.name}</h3>
              <section className="ingredients">
                <h3>Ingredientes</h3>
                {recipe.recipeIngredients.map((ingredient) => (
                  <>
                    <p>Nombre: {ingredient.name}</p>
                    <p>Cantidad: {ingredient.quantity}</p>
                  </>
                ))}
              </section>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
export default Recipes;
