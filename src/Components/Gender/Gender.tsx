import React from 'react'
import { Link } from "react-router-dom"
import './Gender.scss'

const Gender: React.FC = () => {
    return (
        <nav className="app-gender">
            <ul className="app-gender__items">
                <li className="app-gender__item">
                    <Link 
                    className="app-gender__link active-gender"
                    to="/man"
                    >
                        Мужчинам
                    </Link>
                </li>
                <li className="app-gender__item">
                    <Link 
                    to="/wooman"
                    className="app-gender__link">
                        Женщинам
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Gender
