import { combineReducers } from "redux";
import { reducer2 } from "./index";

const reducers = combineReducers({
  array: reducer2,
});

export default reducers;