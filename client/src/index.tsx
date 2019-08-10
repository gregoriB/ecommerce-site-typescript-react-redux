import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./fontawesome";
import App from "./containers/App";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
