import React from 'react'
import { Categories, Sort, PizzaBlock } from '../components'

export default function Home({items}) {
    console.log(items);
    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    list={['Мясные','Вегетарианская','Гриль','Острые','Закрытые']}
                    onClickItem={(name) => console.log(name)}
                />
                <Sort 
                    list={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => (
                    <PizzaBlock
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}
