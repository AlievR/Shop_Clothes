import React from 'react'
import { Link } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <div className="app-header__container">
                <div className="app-header__intro">
                    <Link
                        to="/"
                        className="app-header__logo">
                        ARDA
                    </Link>
                    <div className="app-header__search">
                        <SearchBar />
                    </div>
                    <nav className="app-header__nav">
                        <ul className="app-header__nav-items">
                            <li className="app-header__nav-item">
                                <Link
                                    className="app-header__nav-link"
                                    to="/">
                                    <span className="app-header__nav-icon-account" />
                                </Link>
                            </li>
                            <li className="app-header__nav-item">
                                <Link
                                    className="app-header__nav-link"
                                    to="/">
                                    <span className="app-header__nav-icon-favorite" />
                                </Link>
                            </li>
                            <li className="app-header__nav-item">
                                <Link
                                    className="app-header__nav-link"
                                    to="/">
                                    <span className="app-header__nav-icon-basket" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
