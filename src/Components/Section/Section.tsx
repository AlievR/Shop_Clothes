import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Section.scss'
import {IsectionComponent} from '../../type/shop'
import { selectSort } from '../../redux/reducers/filters'
import { sortCategory } from '../../redux/actions/filters'

const Section: React.FC<IsectionComponent> = ({options}) => {


    const dispatch = useDispatch()

    const sortActive = useSelector(selectSort)

    const handleClickSort = (sort: string) => {
        dispatch(sortCategory(sort))
    }

    const renderSortItems = options.map((opt) =>{
        const { id, value, name } = opt
        let clasName = "app-sort-select__box"
        if(sortActive === name){
            clasName += " active__box"
        }
        return(
            <li key={id} 
            className="app-sort-select"
            onClick = {() => handleClickSort(name)}
            >
                <span className={clasName}/>
                <span className="app-sort-select__label"> {value} </span>
            </li>
        )
    })

    return (
        <>
        {renderSortItems}
        </>
    )
}

export default Section