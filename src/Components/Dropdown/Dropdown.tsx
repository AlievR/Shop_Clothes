import React from 'react'
import { useComponentVisible } from '../../hook/useComponentVisible.js'
import { IbuttonDropComponent } from '../../type/shop'
import './Dropdown.scss'
import Button from '../Button/Button'


const Dropdown: React.FC<IbuttonDropComponent> = ({ label, children }) => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    const handleClickActiveFilter = () => setIsComponentVisible((state: boolean) => !state)


    return (
        <div ref={ref} className="app-dropdown">
            <Button onClick={handleClickActiveFilter} type="outline-dark" toggle>
                <span>{label}</span>
            </Button>
            {
                isComponentVisible && (
                    React.isValidElement(children) &&
                    React.cloneElement(children, { setIsComponentVisible: setIsComponentVisible })
                )
            }
        </div >
    )
}

export default Dropdown
