import {ADD_DATA_TO_CART} from "../constants";

export const add_data_to_cart = (data) => {
    return {
        type:  ADD_DATA_TO_CART,
        data
    }
}