import {combineReducers} from "redux";
import post_r from "./post";
import user_r from "./user";

const rootReducer = combineReducers({
   post_r,
   user_r
});

export default rootReducer;