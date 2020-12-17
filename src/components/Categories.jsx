import React from 'react'
import PropTypes from "prop-types";
const Categories = ({list, onClickItem, category}) => {
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
Categories.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
    onClickItem: PropTypes.func,
    category: PropTypes.number
}
export default React.memo(Categories)
