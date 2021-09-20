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

        const renderFilterItems = options.map((opt) => {
            const check = (typeof activeValue === "object")
                ? activeValue.includes(opt)
                : activeValue === opt

            let classNameItem = "app-dropdown-list__item"
            let classNameBox = "app-dropdown-list__box"
            if (check) {
                classNameItem += " active-item"
                classNameBox += " active-box"
            }

            return (
                <li className={classNameItem} key={opt}
                    onClick={() => handleClickDropDownItem(opt)}
                >
                    <span className={classNameBox} />
                    <span className="app-dropdown-list__value">{opt}</span>
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