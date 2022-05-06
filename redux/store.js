import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

// creating store
export const store = createStore(rootReducer);

// bind store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
