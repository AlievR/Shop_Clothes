import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ClotheCards.scss'
import { selectClothesLength, selectLoading, selectError,
selectClothesIds, selectGender} from '../../redux/reducers/clothes'
import { fetchClothes} from '../../redux/actions/clothes'
import {clearFilters, paginationClothes} from '../../redux/actions/filters'
import ClotheCard from '../ClotheCard/ClotheCard'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import Pagination from '../Pagination/Pagination'


const ClotheCards: React.FC = () => {

    const dispatch = useDispatch()

    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const lengthClothes = useSelector(selectClothesLength)
    const clothesId = useSelector(selectClothesIds)
    const gender = useSelector(selectGender)
    

    useEffect(() => {
        function fetchMyAPI() {
            dispatch(clearFilters())
            dispatch(fetchClothes())
        }
        fetchMyAPI()
    }, [gender, dispatch])


    const handleClickPagination = (pageNumbers : number) => {
        dispatch(paginationClothes(pageNumbers))
    }


    const renderListClothes = clothesId.map((id) => {
        return <ClotheCard key={id} id={id} />
    })

    if (loading) { return <SpinnerLoading /> }
    if (error) { return <h1>{error}</h1> }

    return (
        <section className="app-cards-clothes">
            <div className="app-cards-clothes__intro">
                <h2 className="app-cards-clothes__title">
                    {
                          lengthClothes > 0 ? `Найдено ${lengthClothes} моделей`
                          : 'По вашему запросу ничего не найдено'
                    }
                </h2>
                <ul className="app-cards-clothes__items">
                    {renderListClothes}
                </ul>
            </div>
            {lengthClothes > 0 && <Pagination onClick={handleClickPagination}/>}
        </section>
    )
}

export default ClotheCards
