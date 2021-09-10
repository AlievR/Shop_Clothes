import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PaginationButton.scss'
import { paginationClothes } from '../../redux/actions/clothes'
import { selectFilters } from '../../redux/reducers/filters'
import { fillArrayPagination, selectClothesLength, 
selectTotalPage} from '../../redux/reducers/clothes'

const PaginationButton: React.FC = () => {
    const dispatch = useDispatch()

    const pageNumbers = useSelector(fillArrayPagination)
    const filters = useSelector(selectFilters)
    const clothesTotalPage = useSelector(selectTotalPage)
    const lengthClothes = useSelector(selectClothesLength)

    useEffect(() => {
        function defaultCurrent() {
            dispatch(paginationClothes(1))
        }
        defaultCurrent()
    }, [filters, dispatch])


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