import React from 'react'
import { useSelector } from 'react-redux'
import './ClotheCards.scss'
import { selectClothesLength, selectLoading, selectError,
selectClothesIds} from '../../redux/reducers/clothes'
import ClotheCard from '../ClotheCard/ClotheCard'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'


const ClotheCards: React.FC = () => {

    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const lengthClothes = useSelector(selectClothesLength)
    const clothesId = useSelector(selectClothesIds)

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
        </section>
    )
}

export default ClotheCards
