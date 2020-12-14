import React, {useState} from 'react'
const Categories = ({list, onClickItem}) => {
    const [activeItem, setActiveItem] = useState('all')
    const changeActive = name => {
        setActiveItem(name)
    }
    return (
        <div className="categories">
            <ul>
                <li 
                    onClick={() => {setActiveItem('all')}}
                    className={activeItem === 'all' ? "active" : ''}
                >Все</li>
                {list && list.map((name, i) => 
                    <li 
                        className= {activeItem === name ? "active" : ''}
                        key={`${name}_${i}`}
                        onClick={() => changeActive(name)}
                    >
                        {name}
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Categories
