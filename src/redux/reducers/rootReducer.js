import {combineReducers} from "redux";
import {dataReducer} from "./data";
import {filterReducer} from "./filters";

export const rootReducer = combineReducers({
    data: dataReducer,
    filter: filterReducer,
})