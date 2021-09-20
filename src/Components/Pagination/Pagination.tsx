import React from 'react'
import { useSelector } from 'react-redux'
import './Pagination.scss'
import { selectClothesLength} from '../../redux/reducers/clothes'
import {fillArrayPagination, selectTotalPage} from '../../redux/reducers/filters'
import Button from '../Button/Button'
import {Ipagination} from '../../type/general'

const Pagination: React.FC<Ipagination> = ({onClick}) => {

    const pageNumbers = useSelector(fillArrayPagination)
    const clothesTotalPage = useSelector(selectTotalPage)
    const lengthClothes = useSelector(selectClothesLength)

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
                <Button onClick={ () => onClick(pageNumbers)} 
                type="outline-dark" size="large" 
                style={{fontWeight: "900", textTransform: "uppercase"}} >
                    <span>Загрузить еще</span>
                </Button>
            }
        </div>
    )
}

export default Pagination