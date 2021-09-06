import React from 'react'
import { Link } from "react-router-dom"
import { IclothesItemComponent } from '../../type/shop'
import './ClotheCard.scss'

const ClotheCard: React.FC<IclothesItemComponent> = ({ item }) => {

    const { id, img_main, name, price} = item


    
    const path = `/product-detail/${id}`
    return (
        <div className="app-clothes-item">
            <Link
                to={path}
                className="app-clothes-item__card">
                <div className="app-clothes-item__picture">
                    <img className="app-clothes-item__img"
                        src={img_main} alt={name} />
                </div>
                <p className="app-clothes-item__text app-clothes-item__title">
                    {name}
                </p>
            </Link>
            <div className="app-clothes-item__info">
                <span 
                className="app-clothes-item__text app-clothes-item__info-price">
                    {price} руб.
                </span>
                <Link to="/" className="app-clothes-item__info-open">
                    <span className="app-clothes-item__info-basket" />
                </Link>
            </div>
        </div>
    )
}

export default ClotheCard
