import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/root.reducer";

// Persist config for redux store
const persistConfig = {
  key: "root",
  storage,
};

// presisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating store
const store = createStore(
  persistedReducer,
  // using logger for redux
  composeEnhancers(applyMiddleware(logger))
);

// persistor
const persistor = persistStore(store);

// exporting sotre and persistor
export { store, persistor };
