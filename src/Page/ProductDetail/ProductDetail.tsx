import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetail.scss'
import { RootState } from '../../redux/reducers'
import { selecCtlothesById } from '../../redux/reducers/clothes'
import { IbasketApplicant } from '../../type/basket'
import { addItemAction } from '../../redux/actions/basket'
import { IlistClothes } from '../../type/shop'
import Button from '../../Components/Button/Button'
import Dropdown from '../../Components/Dropdown/Dropdown'
import DropdownList from '../../Components/DropdownList/DropdownList'

const ProductDetail: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>()
    const { name, price, color, size, img_main, img_card1, img_card2 } =
        useSelector((state: RootState) => selecCtlothesById(state, Number(id))) as IlistClothes

    const [activeSize, setActiveSize] = useState('Выбрать размер')

    const handleClickActiveSize = (payload: string) => {
        setActiveSize(payload)
    }

    const handleClickAddClothes = () => {
        if (activeSize !== "Выбрать размер") {
            const newItem: IbasketApplicant = {
                id: id + activeSize,
                name: name,
                price: price,
                size: activeSize,
                color: color,
                img_main: img_main
            }
            dispatch(addItemAction(newItem))
            toast.success(`${name} (${activeSize}) успешно добавлена в корзину`);
        } else {
            toast.error('Необходимо выбра размер');
        }
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
                        <div className="app-product-detail__choose">
                            <Dropdown label={activeSize}>
                                <DropdownList options={size} activeValue={activeSize}
                                    onClick={(payload) => handleClickActiveSize(payload)}
                                    visible={false}
                                />
                            </Dropdown>
                            <Button onClick={handleClickAddClothes}
                                style={{ width: "100%" }}>
                                <span>Добавить в корзину</span>
                            </Button>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail
