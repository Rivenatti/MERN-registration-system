import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { SIGNED_IN } from "./actions/actions";

import setAuthorizationHeader from "./utils/setAuthorizationHeader";

// Create redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// On page refresh check for token
if (localStorage.token) {
  // Set authorization header
  setAuthorizationHeader(localStorage.token);

  // Set user information
  store.dispatch({ type: SIGNED_IN, token: localStorage.token });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
