import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Categories from '../../Components/Categoties/Categories'
import ClotheCards from '../../Components/ClotheCards/ClotheCards'
import Gender from '../../Components/Gender/Gender'
import PaginationButton from '../../Components/PaginationButton/PaginationButton'
import './Main.scss'
import { selectClothesLength, selectGender} from '../../redux/reducers/clothes'
import { fetchClothes} from '../../redux/actions/clothes'
import { selectFilters } from '../../redux/reducers/filters'
import { paginationClothes } from '../../redux/actions/clothes'
import {clearCategory} from '../../redux/actions/filters'


const Main: React.FC = () => {

    const lengthClothes = useSelector(selectClothesLength)
    const gender = useSelector(selectGender)
    const filters = useSelector(selectFilters)

    const dispatch = useDispatch()


    useEffect(() => {
        function fetchMyAPI() {
            dispatch(clearCategory())
            dispatch(fetchClothes())
        }
        fetchMyAPI()
    }, [gender, dispatch])


    useEffect(() => {
        function defaultCurrent() {
            dispatch(paginationClothes(1))
        }
        defaultCurrent()
    }, [filters, dispatch])



    return (
        <main className="app-main">
            <div className="app-main__container">
                <div>
                    <Gender />
                </div>
                <Categories />
                <ClotheCards />
                {lengthClothes > 0 && <PaginationButton />}
            </div>
        </main>
    )
}

export default Main
