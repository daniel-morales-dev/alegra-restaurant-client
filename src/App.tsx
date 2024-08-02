import "./App.scss";
import AsideMenu from "./Components/asideMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="container-restaurant">
      <AsideMenu />
      <section className={"main-container"}>
        <Outlet />
      </section>
    </section>
  );
}

export default App;
