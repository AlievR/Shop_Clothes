import React from 'react'
import { Link } from "react-router-dom"
import basket from '../../Image/basket.png'
import './BasketEmpty.scss'


const BasketEmpty: React.FC = () => {
    return (
        <section className="app-basket-empty">
            <div className="app-basket-empty__text">
                <h2 className="app-basket-empty__text-title"> Ваша корзина пустая </h2>
                <p className="app-basket-empty__text-suptitle">
                    Для соверешения заказ перейдите на главную страницу.
                </p>
            </div>
            <div className="app-basket-empty__img">
                <img src={basket} alt="Empty cart" />
            </div>
            <Link to="/"
                className="app-basket-empty__link">
                Вернуться на главную
            </Link>

        </section>
    )
}

export default BasketEmpty