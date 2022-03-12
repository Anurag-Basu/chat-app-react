import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./redux/store";
import "antd/dist/antd.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* Redux provider */}
    <Provider store={store}>
      {/* Persisting redux store */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Router */}
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
