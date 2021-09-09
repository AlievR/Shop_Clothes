import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { IlistClothes } from '../../type/shop'
import './ProductDetail.scss'
import ButtonDrop from '../../Components/ButtonDrop/ButtonDrop'
import {categories} from '../../static'

const ProductDetail: React.FC = () => {

    

    const template = {
        id: 0,
        name: '',
        price: 0,
        sizes: [],
        colors: '',
        img_main: '',
        img_card1: '',
        img_card2: '',
    }

    const [items, setItems] = useState<IlistClothes>(template)

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await axios.get<IlistClothes>(`http://localhost:3001/man-clothes/${id}`)
            setItems(response.data)
        }
        fetchMyAPI()
    }, [])

    const { name, price, colors, sizes, img_card1, img_card2 } = items


    return (
        <div className="app-product-detail">
            <div className="app-product-detail__container">
                <div className="app-product-detail__intro">
                    <div className="app-product-detail__view">
                        <div className="app-product-detail__view-block">
                            <img className="app-product-detail__view-img"
                                src={img_card1} alt={name} />
                        </div>
                        <div className="app-product-detail__view-block">
                            <img className="app-product-detail__view-img"
                                src={img_card2} alt={name} />
                        </div>
                    </div>
                    <div className="app-product-detail__info">
                        <div className="app-product-detail__info-till">
                            <h2 className="app-product-detail__info-till-name">{name}</h2>
                            <span className="app-product-detail__info-till-price">{price} руб.</span>
                        </div>
                        <div className="app-product-detail__info-color">
                            <label className="app-product-detail__info-color-label">Цвет:</label>
                            <span className="app-product-detail__info-color-value"> {colors} </span>
                        </div>
                        <div>
                            <ButtonDrop items = {categories[1]} />
                            <button className="app-product-detail__add-btn">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
