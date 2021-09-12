import React from 'react'
import { useComponentVisible } from '../../hook/useComponentVisible.js'
import { IbuttonDropComponent } from '../../type/shop'
import './ButtonDrop.scss'
import MultiFilter from '../../Components/MultiFilter/MultiFilter'

const ButtonDrop: React.FC<IbuttonDropComponent> = ({ items }, children: React.ReactNode) => {

    const { label, nameCategory, options } = items

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    const handleClickActiveFilter = () => setIsComponentVisible((state: boolean) => !state)

    let className = "app-categories__arrow"
    if (isComponentVisible === true) {
        className += " active-drop"
    }

    return (
        <div ref={ref} className="app-button-drop">
            <button
                className="app-button-drop__btn"
                onClick={handleClickActiveFilter}
            >
                <span className="app-button-drop__btn-name">
                    {label}
                </span>
                <span className={className} />
            </button>
            {
                isComponentVisible && (
                    <div className="app-button-drop__active-filter">
                        <ul className="app-multi-filter__items">
                            <MultiFilter nameCategory={nameCategory} options={options} />
                        </ul>
                    </div>
                )}
        </div >
    )
}

export default ButtonDrop
