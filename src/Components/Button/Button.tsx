import React from 'react'
import './Button.scss'
import { Ibutton } from '../../type/general'

const typesButton = [
    "primary",
    "light",
    "dark",
    "outline-primary",
    "outline-light",
    "outline-dark"
]
const sizeButton = ["small", "medium", "large"]


const Button: React.FC<Ibutton> = ({
    children,
    onClick,
    type = typesButton[0],
    size = sizeButton[1],
    toggle = false,
    style
}) => {

    const currentType = typesButton.includes(type) ? type : typesButton[0]
    const currentSize = sizeButton.includes(size) && size
    const currentToogle = toggle === true ? "dropdown-toggle" : ''

    const className = `btn btn-${currentType} btn-${currentSize} ${currentToogle}`

    return (
        <button className={className} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
