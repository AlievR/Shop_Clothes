import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './MultiFilter.scss'
import { ImultiFilterComponent } from '../../type/shop'
import { sizeCategory, colorCategory } from '../../redux/actions/filters'
import { selectOptionsCategory } from '../../redux/reducers/filters'
import { RootState } from '../../redux/reducers'


const MultiFilter: React.FC<ImultiFilterComponent> = ({ nameCategory, options }) => {


    const activeOpt = useSelector((state: RootState) => selectOptionsCategory(state, nameCategory))

    const dispatch = useDispatch()

    const handleClickActiveFilter = (name: string) => {
        switch (nameCategory) {
            case "size":
                return dispatch(sizeCategory(name))
            case "color":
                return dispatch(colorCategory(name))
        }
    }

    const renderFilterItems = options.map((opt) => {
        const { id, value, name } = opt
        let className = "app-multi-filter__item"
        if (activeOpt.includes(name)) {
            className += " active-flter"
        }
        return (
            <li
                className={className} key={id}
                onClick={() => handleClickActiveFilter(name)}
            >
                <span>
                    {value}
                </span>
            </li>
        )
    })

    return (
        <>
            {renderFilterItems}
        </>
    )
}

export default MultiFilter
