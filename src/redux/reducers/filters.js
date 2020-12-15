import {SET_CATEGORY, SET_SORT_BY} from "../constants";

const initialState = {
    sortBy: '',
    category: ''
}
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default: return state
    }
}