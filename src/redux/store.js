import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// all browser to cache results using localStorage under the hood
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// persisted version of store
export const persistor = persistStore(store);
export default { store, persistor };