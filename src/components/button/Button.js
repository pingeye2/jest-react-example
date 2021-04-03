import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div data-testid='button' className='button-style'>
            {props.label}
        </div>
    )
}

export default Button
