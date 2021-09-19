import React from 'react'
import './Button.scss'
import { Ibutton } from '../../type/general'

const typesButton = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
]
const sizeButton = ["small", "medium", "large"]

const Button: React.FC<Ibutton> = ({
    children,
    onClick,
    type = typesButton[0],
    size = sizeButton[1]
}) => {


    const currentType = typesButton.includes(type) && type
    const currentSize = sizeButton.includes(size) && size

    const className = `btn btn-${currentType} btn-${currentSize}`


    return (
        <button className={className}
        onClick={onClick}>
                {children}
        </button>
    )
}

export default Button
