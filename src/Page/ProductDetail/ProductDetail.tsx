import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MultiFilter from '../../Components/MultiFilter/MultiFilter'
import { IlistClothesMan } from '../../type/shop'
import { useComponentVisible } from '../../hook/useComponentVisible.js'
import './ProductDetail.scss'

const ProductDetail: React.FC = () => {

    const template = {
        id: 0,
        name: '',
        price: 0,
        sizes: [],
        color: '',
        img_main: '',
        img_card1: '',
        img_card2: '',
    }

    const [items, setItems] = useState<IlistClothesMan>(template)

    const { id } = useParams<{ id: string }>()

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await axios.get<IlistClothesMan>(`http://localhost:3001/man-clothes/${id}`)
            setItems(response.data)
        }
        fetchMyAPI()
    }, [])

    const { name, price, color, sizes, img_card1, img_card2 } = items


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
                            <span className="app-product-detail__info-color-value"> {color} </span>
                        </div>
                        <div>
                            <div  ref={ref} className="app-product-detail__choose">
                                <button
                                    className="app-product-detail__choose-btn"
                                    onClick={() => setIsComponentVisible(!isComponentVisible)}
                                >
                                    <span className="app-categories__btn-name">
                                        Выбрать размер
                                    </span>
                                    <span className="app-categories__arrow" />
                                </button>
                                {
                                    isComponentVisible && (
                                        
                                        <div className="app-categories__active-filter">
                                            <MultiFilter items={sizes} />
                                        </div>
                                    )
                                }
                            </div>
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
