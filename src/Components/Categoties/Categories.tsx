import React, { useState } from 'react'
import MultiFilter from '../MultiFilter/MultiFilter'
import './Categories.scss'
import { useComponentVisible } from '../../hook/useComponentVisible.js'
import { categories } from '../../static'


const Categories: React.FC = () => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    const [drop, setDrop] = useState(false)

    const handleClickActiveFilter = (id: number) => {
        setIsComponentVisible(id)
        setDrop((state) => !state)
    }

    let className = "app-categories__arrow"
    if (drop === true) {
        className += " active-drop"
    }

    return (
        <div className="app-categories">
            <ul className="app-categories__items">
                {
                    categories.map((category) => {
                        return (
                            <li
                                className="app-categories__item"
                                key={category.id}>
                                <div className="app-product-detail__choose">
                                    <button
                                      
                                        className="app-categories__btn"
                                        onClick={() => setIsComponentVisible(!isComponentVisible)}
                                    >
                                        <span className="app-categories__btn-name">
                                            {category.label}
                                        </span>
                                        <span className={className} />
                                    </button>
                                    {
                                    isComponentVisible && (
                                            <div className="app-categories__active-filter"
                                            >
                                                <MultiFilter items={category.items} />
                                            </div>
                                    )
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="app-product-detail__choose">
                                    <button
                                        ref={ref}
                                        className="app-categories__btn"
                                        onClick={() => setIsComponentVisible(!isComponentVisible)}
                                    >
                                        <span className={className} />
                                    </button>
                                    {
                                    isComponentVisible && (
                                            <div className="app-categories__active-filter"
                                            >
                                            
                                            </div>
                                    )
                                    }
                                </div>
        </div>
    )
}

export default Categories
