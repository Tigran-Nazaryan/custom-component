import React from 'react';
import {
    baseStyles,
    sizeStyles,
    typeStyles
} from "./ButtonStyles.js";

const CustomButton = ({ size = 'medium', type = 'primary', onClick, children }) => {
    const buttonStyles = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]}`;

    return (
        <button className={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
}

export default CustomButton;
