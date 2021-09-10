import React from 'react'
import ButtonDrop from '../ButtonDrop/ButtonDrop'
import { categories } from '../../static'
import './Categories.scss'


const Categories: React.FC = () => {
    return (
        <div className="app-categories">
            <ul className="app-categories__items">
                {
                    categories.map((category) => {
                        const {id, ...items} = category
                        return (
                            <li
                                className="app-categories__item"
                                key={category.id}>
                                <ButtonDrop items={items} />
                            </li>
                        )
                    })
                }
                <li className="app-categories__item">
                    <button className="app-categories__delete-filters">
                        <span>
                           Очистить фильтры
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Categories
