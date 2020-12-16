import React from 'react'
const Categories = ({list, onClickItem, category}) => {
    console.log(category)
    const changeActive = index => {
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => {changeActive(null)}}
                    className={category === null ? "active" : ''}
                >Все</li>
                {list && list.map((name, i) =>
                    <li
                        className= {category === i ? "active" : ''}
                        key={`${name}_${i}`}
                        onClick={() => changeActive(i)}
                    >
                        {name}
                    </li>)
                }
            </ul>
        </div>
    )
}
export default React.memo(Categories)
