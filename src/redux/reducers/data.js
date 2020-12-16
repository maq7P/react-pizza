import {DATA_LOADED, SET_DATA} from "../constants";

const initialState = {
    items: [],
    isLoaded: false
}
export const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_DATA:
            return {
                ...state,
                items: action.payload,
            }
        case DATA_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default: return state
    }
}