import {ADD_DATA_TO_CART, ADD_ITEM_SUCH_TYPE, DEL_ALL, DEL_ITEM, DEL_ITEM_SUCH_TYPE} from "../constants";

export const add_data_to_cart = (data) => {
    return {
        type:  ADD_DATA_TO_CART,
        data
    }
}
export const add_item_such_type = (data) => {
    return {
        type:  ADD_ITEM_SUCH_TYPE,
        data
    }
}
export const del_item_such_type = (data) => {
    return {
        type:  DEL_ITEM_SUCH_TYPE,
        data
    }
}
export const del_item = (data) => {
    return {
        type:  DEL_ITEM,
        data
    }
}
export const del_all = () => {
    return {type: DEL_ALL}
}