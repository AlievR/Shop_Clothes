import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import './BaskeItem.scss'
import { IbasketItemComponent } from '../../type/basket'
import { selectBasketById } from '../../redux/reducers/basket'
import { RootState } from '../../redux/reducers'
import { addItemBasket, minusItemBasket } from '../../redux/actions/basket'
import { IbasketPayload } from '../../type/basket'



const BaskeItem: React.FC<IbasketItemComponent> = ({ id }) => {

    const dispatch = useDispatch()

    const { name, size, price, color, img_main, count, totalPrice } = useSelector((state: RootState) => selectBasketById(state, id)) || {}

    const handleClickAddItem = () => {
        if (size !== undefined) {
            const selectItem: IbasketPayload = {
                id: id,
                size: size
            }
            dispatch(addItemBasket(selectItem))
        }
    }

    const handleClickMinusItem = () => {
        if (size !== undefined) {
            const selectItem: IbasketPayload = {
                id: id,
                size: size
            }
            dispatch(minusItemBasket(selectItem))
        }
    }

    return (
        <li className="app-basket-item">
            <div className="app-basket-item__img">
                <img className="app-basket-item__img-box"
                    src={img_main} alt={name} />
            </div>

            <div className="app-basket-item__info">
                <div className="app-basket-item__info-box">
                    <label className="app-basket-item__info-name">
                        {name}
                    </label>
                    <span className="app-basket-item__info-size">
                        ({size})
                    </span>
                    <span className="app-basket-item__info-color">
                        {color}
                    </span>
                </div>
                <span className="app-basket-item__info-price"> {price} руб. </span>
                <div className="app-basket-item__counter">
                    <button className="app-basket-item__counter-btn"
                        onClick={handleClickAddItem}
                    >
                        <span className="app-basket-item__counter-btn-minus" />
                    </button>
                    <span className="app-basket-item__counter-count" > {count}</span>
                    <button className="app-basket-item__counter-btn"
                    onClick={handleClickMinusItem}
                    >
                        <span className="app-basket-item__counter-btn-plus" />
                    </button>
                </div>
            </div>

            <div className="app-basket-item__sovl">
                <button className="app-basket-item__sovl-btn">
                    <span className="app-basket-item__sovl-trash" />
                </button>
                <span className="app-basket-item__sovl-price"> {totalPrice} руб. </span>
            </div>

        </li>
    )
}

export default BaskeItem