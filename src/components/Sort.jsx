import React, {useEffect, useState, useRef} from 'react'
import PropTypes from "prop-types";

function Sort({sortItems, sortBy, onClickItem}) {
    const [visiblePopup, setVisiblePopup] = useState(false)

    const changeActive = index => {
        onClickItem(index)
        togglePopup()
    }

    const togglePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const sortRef = useRef();

    const handleOutsideClick = e => {
        const path = e.path || (e.composedPath && e.composedPath());
        if(!path.includes(sortRef.current)){
            togglePopup()
        }
    }

    useEffect(() => {
        if(visiblePopup){
            window.addEventListener('click', handleOutsideClick)
        }
        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [visiblePopup])


    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg className={visiblePopup ? 'transition rotated' : 'transition'}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={togglePopup}>{sortItems[sortBy].name}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul>
                    {sortItems && sortItems.map((item, i) => (
                        <li 
                            key={`${item.name}_${i}`}
                            className={sortBy === i ? 'active' : ''}
                            onClick={() => changeActive(i)}
                        >{item.name}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}
Sort.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
    sortBy: PropTypes.number.isRequired,
    onClickItem: PropTypes.func
}
Sort.defaultProps = {
    sortBy: -1,
    sortItems: {},
}
export default React.memo(Sort)
