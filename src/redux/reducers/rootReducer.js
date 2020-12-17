import {combineReducers} from "redux";
import {dataReducer} from "./data";
import {filterReducer} from "./filters";
import {cartReducer} from "./cart";

export const rootReducer = combineReducers({
    data: dataReducer,
    filter: filterReducer,
    cart: cartReducer
})