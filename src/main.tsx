import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import "moment/locale/es";
import moment from "moment/moment";
moment.locale("es");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </Provider>,
);
