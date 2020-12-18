import React, {useCallback} from 'react'
import { Categories, Sort, PizzaBlock, PizzaLoading } from '../components'
import {useDispatch, useSelector} from "react-redux";
import {set_category, set_sort_by} from "../redux/actions/filters";
import {fetchData} from "../redux/actions/data";
import {add_data_to_cart} from "../redux/actions/cart";

const categoriesName = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [
        {name: 'популярности', type: 'rating', order: 'desc'},
        {name: 'цене', type: 'price', order: 'asc'},
        {name: 'алфавиту', type: 'name', order: 'asc'}
    ]
export default React.memo(function Home() {
    const dispatch = useDispatch()
    const data = useSelector(({ data }) => data)
    const cart = useSelector(({ cart }) => cart)

    const {category, sortBy}  = useSelector(({ filter }) => filter)

    React.useEffect(() => {
        dispatch(fetchData(category, sortItems[sortBy]))
    }, [category, sortBy])

    const onSelectedCategory = useCallback((index) => {
        dispatch(set_category(index))
    }, [])

    const onSelectedSort = useCallback((name) => {
        dispatch(set_sort_by(name))
    }, [])

    const onClickToBtnCart = useCallback((dataInfo) => {
        dispatch(add_data_to_cart(dataInfo))
    }, [])



    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    list={categoriesName}
                    onClickItem={onSelectedCategory}
                />
                <Sort
                    sortBy={sortBy}
                    sortItems={sortItems}
                    onClickItem={onSelectedSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {data.isLoaded
                    ? data.items.map(item => (
                        <PizzaBlock
                            onClickToBtnCart={onClickToBtnCart}
                            key={item.id}
                            dataCartId={cart.items[item.id] && cart.items[item.id].length}
                            {...item}
                        />
                    ))
                    : new Array(4).fill('').map((_,i) => <PizzaLoading key={i}/>)}
            </div>
        </div>
    )
})
