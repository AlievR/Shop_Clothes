import React from 'react'
import { useSelector } from 'react-redux'
import './DropdownList.scss'
import { IfilterListItemComponent } from '../../type/filter'
import { selectOptionsCategory } from '../../redux/reducers/filters'
import { RootState } from '../../redux/reducers'


const DropdownList : React.FC<IfilterListItemComponent> = ({ items, handleClickActiveFilter }) => {

    const { nameFilter, options } = items

    const activeOpt = useSelector((state: RootState) => selectOptionsCategory(state, nameFilter))


    const renderFilterItems = options.map((opt) => {
        const { id, value, name } = opt
        let classNameItem = "app-dropdown-list__item"
        let classNameBox = "app-dropdown-list__box"
        if (activeOpt.includes(name)) {
            classNameItem += " active-item"
            classNameBox += " active-box"
        }
        return (
            <li className={classNameItem} key={id}
                onClick={() => handleClickActiveFilter(nameFilter, name)}
            >
                <span className={classNameBox} />
                <span className="app-dropdown-list__value">{value}</span>
            </li>
        )
    })


    return (
        <ul className="app-dropdown-list">
            {renderFilterItems}
        </ul>
    )
}

export default DropdownList
