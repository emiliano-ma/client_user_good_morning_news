import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import { StripeProvider } from "react-stripe-elements";

const store = configureStore();

window.store = store;

let apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <StripeProvider apiKey="pk_test_21nBNjeqdyB1Mzm2VjDPQprF00kyEKYZSK">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StripeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
