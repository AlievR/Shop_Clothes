import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import './Gender.scss'
import { genderClothes } from '../../redux/actions/clothes'
import { genderCategory } from '../../static'

const Gender: React.FC = () => {

    const {gender} = useSelector((state: RootState) => state.clothes) 

    const dispatch = useDispatch()

    const handleClickGender = (gender: string) => {
        dispatch(genderClothes(gender))
    }


    return (
        <nav className="app-gender">
            <ul className="app-gender__items">
                {
                    genderCategory.map((items) => {
                        const { id, value, name } = items
                        let className = "app-gender__link"
                        if(gender === name) className += " active-gender"
                        return (
                            <li key={id} className="app-gender__item">
                                <Link
                                    className={className}
                                    onClick={() => handleClickGender(name)}
                                    to="/"
                                >
                                    {value}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )
}

export default Gender
