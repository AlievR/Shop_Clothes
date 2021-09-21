import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Basket.scss'
import { selectBasketId, selectTotalSum, selectTotalCount } from '../../redux/reducers/basket'
import { deleteAllItemAction } from '../../redux/actions/basket'
import BaskeItem from '../../Components/BaskeItem/BaskeItem'
import BasketEmpty from '../../Components/BasketEmpty/BasketEmpty'
import Button from '../../Components/Button/Button'

const Basket: React.FC = () => {

    const dispatch = useDispatch()

    const basketId = useSelector(selectBasketId)
    const totalSum = useSelector(selectTotalSum)
    const totalCount = useSelector(selectTotalCount)


    const renderBasketList = basketId.map(({ id }) => {
        return <BaskeItem key={id} id={id} />
    })

    const handleClickDelleteAAllBasket = () => {
        dispatch(deleteAllItemAction())
    }

    if (totalSum === 0) {
        return <BasketEmpty />
    }
    else {
        return (
            <main className="app-basket">
                <div className="app-basket__container">
                    <div className="app-basket__boom">
                        <h1 className="app-basket__boom-title">Корзина</h1>
                        <Button onClick={handleClickDelleteAAllBasket}
                            type="light"
                        >
                            <span>Очистить корзину</span>
                        </Button>
                    </div>
                    <div className="app-basket__intro">
                        <ul className="app-basket__items">
                            {renderBasketList}
                        </ul>
                        <div className="app-basket__total">
                            <div className="app-basket__total-sticky">
                                <div className="app-basket__total-intro">
                                    <div className="app-basket__total-info">
                                        <div className="app-basket__total-box">
                                            <span className="app-basket__total-label">Итого:</span>
                                            <span className="app-basket__total-sum"> {totalSum} руб.</span>
                                        </div>
                                        <div className="app-basket__total-box">
                                            <span className="app-basket__total-label">Количество:</span>
                                            <span className="app-basket__total-sum">{totalCount} шт.</span>
                                        </div>
                                    </div>
                                    <Button onClick={() => alert("Спасибо за заказ!")}
                                        type="dark" style={{width: "100%"}}
                                    >
                                        <span> Оформить заказ</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Basket