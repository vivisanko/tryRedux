import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./reducers/productsReduser";
import userReducer from "./reducers/userReduser";

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App aRandomProps="whatever" />
  </Provider>,
  document.getElementById("root")
);

// console.log("state", store.getState());

// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "John"
//   }
// };
// store.dispatch(updateUserAction);
// console.log("state", store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
