import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES=['btn--primary','btn--outline']
const SIZES=['btn--medium','btn--large']
const loginstate=['Logout','/']
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];


    const checkLoginstate=loginstate.includes(children) ? loginstate[1] : children
    
    return (
        <Link to={checkLoginstate} className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}>
                {children}
            </button>
        </Link>
    )
}