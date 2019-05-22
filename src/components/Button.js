import React from 'react';

import './Button.scss';

const handleClick = (target) => {
    target.classList.toggle('button--opened');
}

const Button = ({ children, opened }) => {
    return (
        <div className={`button ${opened ? 'button--opened' : ''}`} onClick={(e) => handleClick(e.currentTarget)}>
            {children}
        </div>
    )
}


export default Button;