import {DATA_LOADED, SET_DATA} from "../constants";

export const fetchData = (category, sortBy= {}) => (dispatch) => {
    dispatch(data_loaded(false))
    fetch(`http://localhost:3001/pizzas?${category!==null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(response => response.json())
        .then(data => {
            dispatch(set_data(data))
            dispatch(data_loaded(true))
        })
}
const data_loaded = (payload) => ({
        type: DATA_LOADED,
        payload
})
export const set_data = (data) => ({
    type: SET_DATA,
    payload: data
})