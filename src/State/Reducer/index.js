import amountReducer from "./amountreducer";
import { combineReducers } from "redux";

const reducers =combineReducers({
  amount : amountReducer
})

export default reducers;