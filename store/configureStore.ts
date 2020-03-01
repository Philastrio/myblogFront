import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index";

const configureStore = (initialState, options) => {
  const middlewares = [];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducers, initialState, enhancer);
  return store;
};

export default configureStore;
