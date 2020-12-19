import {ADD_DATA_TO_CART, ADD_ITEM_SUCH_TYPE, DEL_ALL, DEL_ITEM, DEL_ITEM_SUCH_TYPE} from "../constants";

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
            const type = `${action.data.type}-${action.data.size}`
            return {
                items: {
                    ...state.items,
                    [id]: state.items[id]
                        ? {
                            ...state.items[id],
                            [type]: state.items[id][type]
                                ? [...state.items[id][type], action.data]
                                : [action.data]
                        }
                        : {
                            [type]: [action.data]
                        }
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.data.price
            }
        }
        case ADD_ITEM_SUCH_TYPE: {
            const id = action.data.id
            const type = action.data.type
            return {
                items: {
                    ...state.items,
                    [id]: {
                        ...state.items[id],
                        [type]: [...state.items[id][type], action.data.item]
                    },
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.data.item.price
            }
        }
        case DEL_ITEM_SUCH_TYPE: {
            const id = action.data.id
            const type = action.data.type
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: {
                        ...state.items[id],
                        [type]: [...state.items[id][type]].slice(1)
                    },
                },
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - action.data.item.price
            }
        }
        case DEL_ITEM: {
            const id = action.data.id
            let newStateItems =  {...state.items[id]}
            delete newStateItems[action.data.type]
            if(!Object.keys(newStateItems).length){
                newStateItems = {}
            }
            return {
                // ...state,
                items:{
                    ...state.items,
                    [id]: newStateItems
                },
                totalCount: state.totalCount - action.data.length,
                totalPrice: state.totalPrice - (action.data.item.price * action.data.length)
            }
        }
        case DEL_ALL: return initialState
        default: return state
    }
}