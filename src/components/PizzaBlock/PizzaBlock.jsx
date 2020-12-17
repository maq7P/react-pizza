import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from "../Button";

function PizzaBlock({id, name, imageUrl, price, sizes, types, onClickToBtnCart, dataCartId}) {
    const typesName = ['тонкое', 'традиционное']
    const availableSize = [26, 30, 40]

    const [activeType, setActiveType] = useState(typesName[types[0]])
    const [sizeValue, setSizeValue] = useState(sizes[0])

    const changeActiveType = name => {
        setActiveType(name)
    }
    const changeActiveSize = name => {
        setSizeValue(name)
    }
    const onClickBtn = () => {
        onClickToBtnCart({
            id, name, imageUrl, price,
            type: activeType,
            size: sizeValue
        })
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typesName.map((typeName, index) => (
                        <li 
                            key={`${typeName}_${index}`}
                            className={classNames({
                                active: activeType === typeName,
                                disabled: !types.includes(index)
                            })}
                            onClick={() => changeActiveType(typeName)}
                        >{typeName}</li>
                    ))}
                </ul>
                <ul>
                    {availableSize.map((size, index) => (
                        <li
                            key={`${size}_${index}`}
                            className={classNames({
                                active: sizeValue === size,
                                disabled: !sizes.includes(size)
                            })}
                            onClick={() => changeActiveSize(size)}
                        >{size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button
                    onClickToBtnCart={onClickBtn}
                    className="button button--outline button--add"

                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {dataCartId ? <i>{dataCartId}</i> : ''}
                </Button>
            </div>
        </div>
    )
}
PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
}
PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    sizes: [],
    types: [],
}

export default PizzaBlock
