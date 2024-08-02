import { createBrowserRouter } from "react-router-dom";
import Orders from "../Components/Orders";
import App from "../App.tsx";
import Kitchen from "../Components/kitchen";
import WareHouse from "../Components/wareHouse";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Orders /> },
      { path: "kitchen", element: <Kitchen /> },
      { path: "warehouse", element: <WareHouse /> },
    ],
  },
]);
