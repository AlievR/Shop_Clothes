import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.scss'
import ButtonDrop from '../../Components/ButtonDrop/ButtonDrop'
import { RootState } from '../../redux/reducers'
import { selecCtlothesById } from '../../redux/reducers/clothes'
import { useSelector, useDispatch } from 'react-redux'
import Select from '../../Components/Select/Select'
import { IbasketPayload, basketActionButton } from '../../type/basket'
import { actionBasket } from '../../redux/actions/basket'
import {IlistClothes} from '../../type/shop'

const ProductDetail: React.FC = () => {

    const dispatch = useDispatch()


    const { id } = useParams<{ id: string }>()
    const { name, price, color, size, img_card1, img_card2 } =
    useSelector((state: RootState) => selecCtlothesById(state, Number(id))) as IlistClothes
    const [activeSize, setActiveSize] = useState('Выбрать размер')

    const handleClickActiveSize = (selectedSize: string) => {
        setActiveSize(selectedSize)
    }

    const handleClickAddClothes = (e: React.MouseEvent<HTMLButtonElement>) => {
        const action = e.currentTarget.name
        const selectItem: IbasketPayload = {
            id: id + activeSize,
            size: activeSize,
            action: action
        }
        dispatch(actionBasket(selectItem))
    }



    return (
        <main className="app-product-detail">
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
                            <ButtonDrop label={activeSize}>
                                <Select sizes={size}
                                    activeSize={activeSize} handleClickActiveSize={handleClickActiveSize}
                                />
                            </ButtonDrop>
                            <button className="app-product-detail__add-btn"
                                 name={basketActionButton.plus}
                                 onClick={handleClickAddClothes}
                            >
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail
