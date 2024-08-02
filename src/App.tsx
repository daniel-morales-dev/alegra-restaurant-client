import "./App.scss";
import Orders from "./Components/Orders";
import { POST_ORDER } from "./store/actions/orders.actions.ts";
import { connect } from "react-redux";
import { AppDispatch } from "./store/store.ts";

type PropsFromRedux = {
  createOrder: () => void;
};

function App({ createOrder }: PropsFromRedux) {
  return (
    <section className="container-restaurant">
      <h1>Alegra - Restaurant</h1>
      <div className="card">
        <button onClick={() => createOrder()}>Pedir almuerzo</button>
        <p>Dia de almuerzo gratis!</p>
      </div>
      <Orders />
    </section>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  createOrder: () => dispatch(POST_ORDER()),
});

export default connect(null, mapDispatchToProps)(App);
