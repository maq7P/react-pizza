import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({btn=false,
        children,
        className = '',
        outline, onClickToBtn
    }) => (
        <button
            onClick={
                onClickToBtn
                    ? () => {onClickToBtn()}
                    : null
            }
            href="/cart.html" 
            className = {
                classNames(className,
                {
                    'btnEmpty': ! btn,
                    'button': btn,
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
