import React from 'react'
import './DropdownList.scss'
import { IfilterListItemComponent } from '../../type/filter'

const DropdownList: React.FC<IfilterListItemComponent> =
    ({ options,
        activeValue,
        visible = true, //скрытие блока при нажатии
        onClick,
        setIsComponentVisible
    }) => {

        const handleClickDropDownItem = (payload: string) => {
            onClick(payload)
            if (visible === false && setIsComponentVisible !== undefined) {
                setIsComponentVisible(false)
            }
        }
        console.log(activeValue)

        const renderFilterItems = options.map((value) => {
            const check = (typeof activeValue === "object")
                ? activeValue.includes(value)
                : activeValue === value

            let classNameItem = "app-dropdown-list__item"
            let classNameBox = "app-dropdown-list__box"
            if (check) {
                classNameItem += " active-item"
                classNameBox += " active-box"
            }

            return (
                <li className={classNameItem} key={value}
                    onClick={() => handleClickDropDownItem(value)}
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