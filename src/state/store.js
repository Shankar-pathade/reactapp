import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/updateReducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk));