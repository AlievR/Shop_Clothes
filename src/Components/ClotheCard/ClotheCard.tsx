import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import './ClotheCard.scss'
import { selecCtlothesById } from '../../redux/reducers/clothes'
import { IclothesItemComponent } from '../../type/shop'
import {RootState} from '../../redux/reducers'
import {IlistClothes} from '../../type/shop'

const ClotheCard: React.FC<IclothesItemComponent> = ({ id }) => {

    const {name, img_main, price} = useSelector((state: RootState) => 
    selecCtlothesById(state,id))  as IlistClothes

    const path = `/product-detail/${id}`

    return (
        <li className="app-clothes-item">
            <article className="app-clothes-item__intro">
                <div className="app-clothes-item__block">
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
            </article>
        </li>
    )
}

export default ClotheCard
