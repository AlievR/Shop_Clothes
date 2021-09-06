import React from 'react'
import { Link } from "react-router-dom"
import './Footer.scss'
const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="app-footer__container">
                <div className="app-footer__intro">
                    <ul className="app-footer__items">
                        <li className="app-footer__item">
                            <label className="app-footer__label"> Помощь и информация </label>
                            <ul className="app-footer__list">
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Статус заказа по номеру
                                    </Link>
                                </li>
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Как оформить заказ
                                    </Link>
                                </li>
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Как выбрать размер
                                    </Link>
                                </li>
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Доставка и возврат
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="app-footer__item">
                            <label className="app-footer__label"> О нас </label>
                            <ul className="app-footer__list">
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Подарочные сертификаты
                                    </Link>
                                </li>
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Вакансии
                                    </Link>
                                </li>
                                <li className="app-footer__paragraph">
                                    <Link
                                        className="app-footer__link"
                                        to="/">
                                        Правила и положения
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="app-footer__item">
                            <label className="app-footer__label"> Способы оплаты </label>
                            <div className="app-footer__pay">
                                <span className="app-footer__pay-visa" />
                                <span className="app-footer__pay-mir" />
                            </div>
                            <p className="app-footer__text">
                                Вы можете оплатить покупки
                                наличными при получении, либо
                                выбрать другой способ оплаты.</p>
                        </li>

                        <li className="app-footer__item">
                            <label className="app-footer__label"> Для мобильных устройств </label>
                            <div className="app-footer__mobile">
                                <span className="app-footer__mobile-ios" />
                                <span className="app-footer__mobile-android" />
                            </div>
                            <p className="app-footer__text">
                                Вы также можете перейти
                                на мобильную версию сайта.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
