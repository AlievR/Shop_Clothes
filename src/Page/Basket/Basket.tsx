import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Basket.scss'
import { selectBasketId } from '../../redux/reducers/basket'
import BaskeItem from '../../Components/BaskeItem/BaskeItem'


const Basket: React.FC = () => {

    const BasketId = useSelector(selectBasketId)

    const renderBasketList = BasketId.map((id) => {
        return <BaskeItem key={id} id={id} />
    })

    return (
        <main className="app-basket">
            <div className="app-basket__container">
                <h1 className="app-basket__title">Корзина</h1>
                <div className="app-basket__intro">
                    <ul className="app-basket__items">
                        {renderBasketList}
                    </ul>
                    <div className="app-basket__total">
                        <div className="app-basket__total-sticky">
                            <div className="app-basket__total-intro">
                                <div className="app-basket__total-box">
                                    <h2 className="app-basket__total-label">Итого:</h2>
                                    <span className="app-basket__total-sum"> 14980 руб.</span>
                                </div>
                                <button className="app-product-detail__add-btn">
                                    <span>
                                        Оформить заказ
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Basket