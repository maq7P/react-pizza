import {SET_DATA} from "../constants";

const initialState = {
    items: []
}
export const dataReducer = (state = initialState, action) => {
    if (SET_DATA) {
        return {
            ...state,
            items: action.payload
        }
    }
}