import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import './BaskeItem.scss'
import { IbasketItemComponent } from '../../type/basket'
import { selectBasketById } from '../../redux/reducers/basket'
import { RootState } from '../../redux/reducers'
import { IbasketItems, IbasketApplicant } from '../../type/basket'
import { addItemAction, minusItemAction, deleteItemAction } from '../../redux/actions/basket'



const BaskeItem: React.FC<IbasketItemComponent> = ({ id }) => {

    const dispatch = useDispatch()

    const path = `/product-detail/${id.replace(/\D+/g,"")}`

    const { name, price, size, color, img_main, count, totalPrice } = useSelector((state: RootState) => selectBasketById(state, id)) as IbasketItems

    const newItem : IbasketApplicant = {
        id: id ,
        name: name,
        price: price,
        size : size,
        color : color,
        img_main: img_main
    }
    const handleClickAddItem = () => dispatch(addItemAction(newItem))
    const handleClickMinusItem = () => dispatch(minusItemAction(newItem))
    const handleClickDeleteItem = () => dispatch(deleteItemAction(newItem))

    return (
        <li className="app-basket-item">
            <Link to={path} className="app-basket-item__link">
                    <img className="app-basket-item__img"
                        src={img_main} alt={name} />
            </Link>
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
                        onClick={handleClickMinusItem}
                    >
                        <span className="app-basket-item__counter-btn-minus" />
                    </button>
                    <span className="app-basket-item__counter-count" > {count}</span>
                    <button className="app-basket-item__counter-btn"
                        onClick={handleClickAddItem}
                    >
                        <span className="app-basket-item__counter-btn-plus" />
                    </button>
                </div>
            </div>

            <div className="app-basket-item__sovl">
                <button className="app-basket-item__sovl-btn"
                    onClick={handleClickDeleteItem}
                >
                    <span className="app-basket-item__sovl-trash" />
                </button>
                <span className="app-basket-item__sovl-price"> {totalPrice} руб. </span>
            </div>

        </li>
    )
}

export default BaskeItem