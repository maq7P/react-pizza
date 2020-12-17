import {ADD_DATA_TO_CART} from "../constants";

const initialState = {
    items: {
    },
    totalCount: 0,
    totalPrice: 0
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_DATA_TO_CART: {
            const id = action.data.id
            return {
                items: {
                    ...state.items,
                    [id]: state.items[id] ? [...state.items[id], action.data] : [action.data]
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.data.price
            }
        }
        default: return state
    }
}