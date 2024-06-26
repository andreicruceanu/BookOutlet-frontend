import ReactDOM from "react-dom/client";
import "../src/constants/styles/global-css-elements.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
