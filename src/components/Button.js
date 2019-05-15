import React from 'react';

import './Button.scss';

const handleClick = (el) => {
    let target = el;
    while (target && target.classList && !target.classList.contains('button')) {
        target = target.parentNode;
    }

    if (!target.parentNode) {
        return false;
    }

    target.classList.toggle('button--opened');
}

const Button = ({ children }) => {
    return (
        <div className="button" onClick={(e) => handleClick(e.target)}>
            {children}
        </div>
    )
}

export default Button;