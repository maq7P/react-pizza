import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({
        children,
        className,
        outline, onClickToBtnCart
    }) => (
        <button
            onClick={
                onClickToBtnCart
                    ? () => {onClickToBtnCart()}
                    : null
            }
            href="/cart.html" 
            className = {
                classNames('button', className,
                {
                    'button--outline': outline
                }
                )
            }
        >  {children}
        </button>
    )
Button.propTypes = {
    className: PropTypes.string.isRequired,
}
export default Button
