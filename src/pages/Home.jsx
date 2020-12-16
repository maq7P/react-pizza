import React, {useCallback} from 'react'
import { Categories, Sort, PizzaBlock } from '../components'
import {useDispatch, useSelector} from "react-redux";
import {set_category, set_sort_by} from "../redux/actions/filters";
import {fetchData} from "../redux/actions/data";
import PizzaLoading from "../components/PizzaBlock/PizzaLoading";

const categoriesName = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [
        {name: 'популярности', type: 'rating', order: 'desc'},
        {name: 'цене', type: 'price', order: 'desc'},
        {name: 'алфавиту', type: 'name', order: 'asc'}
    ]

export default function Home() {
    const dispatch = useDispatch()
    const data = useSelector(({ data }) => data)
    const filter  = useSelector(({ filter }) => filter)

    React.useEffect(() => {
        dispatch(fetchData(filter.category, sortItems[filter.sortBy]))
    }, [filter.category,filter.sortBy])

    const onSelectedCategory = useCallback((index) => {
        dispatch(set_category(index))
    }, [filter.category])

    const onSelectedSort = useCallback((name) => {
        dispatch(set_sort_by(name))
    }, [filter.sortBy])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={filter.category}
                    list={categoriesName}
                    onClickItem={onSelectedCategory}
                />
                <Sort
                    sortBy={filter.sortBy}
                    list={sortItems}
                    onClickItem={onSelectedSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {data.isLoaded
                    ? data.items.map(item => (
                        <PizzaBlock
                            key={item.id}
                            {...item}
                        />
                    ))
                    : new Array(4).fill('').map((_,i) => <PizzaLoading key={i}/>)}
            </div>
        </div>
    )
}
