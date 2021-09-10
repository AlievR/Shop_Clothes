import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './ClotheCards.scss'
import { selectClothesLength, selectLoading, selectError, 
selectGender, selectClothesIds } from '../../redux/reducers/clothes'
import ClotheCard from '../ClotheCard/ClotheCard'
import {fetchClothes} from '../../redux/actions/clothes'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'


const ClotheCards: React.FC = () => {

    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const length = useSelector(selectClothesLength)
    const gender = useSelector(selectGender)
    const clothesId = useSelector(selectClothesIds)

    const dispatch = useDispatch() 

    useEffect( ()=> {
        function fetchMyAPI() {
            dispatch(fetchClothes())
    }
          fetchMyAPI()
    }, [gender, dispatch])

    const renderListClothes = clothesId.map((id) => {
        return  <ClotheCard key={id} id={id} />
    })

    if (loading) { return <SpinnerLoading />}
    if (error) { return <h1>{error}</h1>}

    return (
        <section className="app-cards-clothes">
            <div className="app-cards-clothes__intro">
                <h2 className="app-cards-clothes__title">Найдено {length} моделей</h2>
                <ul className="app-cards-clothes__items">
                    {renderListClothes}
                </ul>
            </div>
        </section>
    )
}

export default ClotheCards
