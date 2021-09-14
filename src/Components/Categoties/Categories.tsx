import React from 'react'
import { useDispatch } from 'react-redux'
import { categories } from '../../static'
import './Categories.scss'
import { clearCategory } from '../../redux/actions/filters'
import MultiFilter from '../MultiFilter/MultiFilter'
import ButtonDrop from '../ButtonDrop/ButtonDrop'


const Categories: React.FC = () => {

    const dispatch = useDispatch()

    const handleClickClear = () => {
        dispatch(clearCategory())
    }

    return (
        <div className="app-categories">
            <ul className="app-categories__items">
                {
                    categories.map((category) => {
                        const { id, label,...items } = category
                        return (
                            <li
                                className="app-categories__item"
                                key={category.id}>
                                <ButtonDrop label={label}>
                                    <MultiFilter items={items} />
                                </ButtonDrop>
                            </li>
                        )
                    })
                }
                <li className="app-categories__item">
                    <button className="app-categories__delete-filters"
                        onClick={handleClickClear}
                    >
                        <span>Очистить фильтры</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Categories
