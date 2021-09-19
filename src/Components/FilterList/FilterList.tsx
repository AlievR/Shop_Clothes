import React from 'react'
import { useDispatch } from 'react-redux'
import { filters } from '../../static'
import { filtersType } from '../../type/filter'
import {
    sizeFilters, colorFilters,
    sortFilters, clearFilters
} from '../../redux/actions/filters'
import DropdownList from '../DropdownList/DropdownList'
import Dropdown from '../Dropdown/Dropdown'
import './FilterList.scss'
import Button from '../Button/Button'


const FilterList: React.FC = () => {

    const dispatch = useDispatch()

    const handleClickClear = () => {
        dispatch(clearFilters())
    }

    const filterDispatch = (nameFilter: string, payload: string) => {
        switch (nameFilter) {
            case filtersType.size:
                return dispatch(sizeFilters(payload))
            case filtersType.color:
                return dispatch(colorFilters(payload))
            case filtersType.sort:
                return dispatch(sortFilters(payload))
        }
    }

    return (
        <div className="app-filter-list">
            <ul className="app-filter-list__items">
                {
                    filters.map((filter) => {
                        const { id, label, ...items } = filter
                        return (
                            <li key={id} className="app-filter-list__item">
                                <Dropdown label={label}>
                                    <DropdownList items={items}
                                        handleClickActiveFilter={filterDispatch} />
                                </Dropdown>
                            </li>
                        )
                    })
                }
                <li className="app-filter-list__item">
                    <Button onClick={handleClickClear} 
                    type="dark" style={{width: "100%"}}>
                        <span>Очистить фильтры</span>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default FilterList
