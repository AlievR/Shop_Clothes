import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './MultiFilter.scss'
import { ImultiFilterComponent } from '../../type/shop'
import { dispatchCategory } from '../../redux/actions/filters'
import { selectOptionsCategory } from '../../redux/reducers/filters'
import { RootState } from '../../redux/reducers'


const MultiFilter: React.FC<ImultiFilterComponent> = ({ nameCategory, options }) => {

    const activeOpt = useSelector((state: RootState) => selectOptionsCategory(state, nameCategory))

    const dispatch = useDispatch()

    const handleClickActiveFilter = (value: string) => {
        dispatch(dispatchCategory(nameCategory,value))
    }

    const renderFilterItems = options.map((opt) => {
        const { id, value, name } = opt
        let classNameItem = "app-multi-filter__item"
        let classNameBox = "app-multi-filter__box"
        if (activeOpt.includes(name)){
            classNameItem += " active-item"
            classNameBox += " active-box"
        }
        return (
            <li className={classNameItem} key={id}
                onClick={() => handleClickActiveFilter(name)}
            >
                <span className={classNameBox} />
                <span className="app-multi-filter__name">{value}</span>
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
