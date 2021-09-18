import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PaginationButton.scss'
import { paginationClothes } from '../../redux/actions/filters'
import { selectClothesLength} from '../../redux/reducers/clothes'
import {fillArrayPagination, selectTotalPage} from '../../redux/reducers/filters'

const PaginationButton: React.FC = () => {
    const dispatch = useDispatch()

    const pageNumbers = useSelector(fillArrayPagination)
    const clothesTotalPage = useSelector(selectTotalPage)
    const lengthClothes = useSelector(selectClothesLength)



    const handleClickPagination = () => {
        dispatch(paginationClothes(pageNumbers))
    }

    let displayTotal = clothesTotalPage
    if(clothesTotalPage > lengthClothes){
        displayTotal = lengthClothes
    }


    return (
        <div className="app-pagination">
            <h2 className="app-pagination__info">
                Отображается {displayTotal} из {lengthClothes} товаров
            </h2>
            {
                (lengthClothes - clothesTotalPage) > 0 &&
                <button className="app-pagination__more-load"
                    onClick={handleClickPagination}>
                    <span className="app-pagination__text">
                        Загрузить еще
                    </span>
                </button>
            }
        </div>
    )
}

export default PaginationButton