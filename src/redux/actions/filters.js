import {SET_CATEGORY, SET_SORT_BY} from "../constants";

export const set_sort_by = (name) => ({
    type: SET_SORT_BY,
    payload: name
})
export const set_category = (name) => ({
    type: SET_CATEGORY,
    payload: name
})