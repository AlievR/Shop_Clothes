import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './MultiFilter.scss'
import { ImultiFilterComponent } from '../../type/shop'
import { sizeFilters, colorFilters } from '../../redux/actions/filters'
import { selectOptionsCategory } from '../../redux/reducers/filters'
import { RootState } from '../../redux/reducers'


const MultiFilter: React.FC<ImultiFilterComponent> = ({ items }) => {

    const {nameCategory, options} = items

    const activeOpt = useSelector((state: RootState) => selectOptionsCategory(state, nameCategory))

    const dispatch = useDispatch()

    const handleClickActiveFilter = (name: string) => {
        switch (nameCategory) {
            case "size":
                return dispatch(sizeFilters(name))
            case "color":
                return dispatch(colorFilters(name))
        }
    }

    const renderFilterItems = options.map((opt) => {
        const { id, value, name } = opt
        let className = "app-multi-filter__item"
        if (name.toUpperCase() === activeOpt) {
            className += " active-flter"
        }
        return (
            <li
                className={className} key={id}
                onClick={() => handleClickActiveFilter(name)}
            >
                {value}
            </li>
        )
    })

    return (
        <div
            className="app-multi-filter"
        >
            <ul className="app-multi-filter__items">
                {renderFilterItems}
            </ul>
        </div>
    )
}

export default MultiFilter
