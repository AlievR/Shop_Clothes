import React from 'react'
import './Select.scss'
import { IsectionComponent } from '../../type/shop'


const Select: React.FC<IsectionComponent> = ({ sizes, activeSize, handleClickActiveSize, setIsComponentVisible }) => {

    const handleClickSort = (size: string) => {
        handleClickActiveSize(size)
        if (setIsComponentVisible !== undefined) {
            setIsComponentVisible(false)
        }
    }

    const renderSelect = sizes.map((size) => {
        const sizeUpperCase = size.toUpperCase()
        let clasName = "app-select"
        if (activeSize === sizeUpperCase) {
            clasName += " active__item"
        }
        return (
            <li key={size}
                className={clasName}
                onClick={() => handleClickSort(sizeUpperCase)}
            >
                <span className="app-select__label"> {sizeUpperCase} </span>
            </li>
        )
    })

    return (
        <>
            {renderSelect}
        </>
    )
}

export default Select