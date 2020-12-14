import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({
        children,
        className,
        outline
    }) => (
        <button
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
// Button.propTypes = {
//     onClick: PropTypes.func,
// }
export default Button
