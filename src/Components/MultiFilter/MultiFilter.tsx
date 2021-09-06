import React, {useState} from 'react'
import './MultiFilter.scss'
import { IcategoryComponent } from '../../type/shop'



const MultiFilter: React.FC<IcategoryComponent> = ({ items }) => {


    const [active, setActive] = useState<number>(items[0].id)

    return (
        <div
            className="app-multi-filter"
        >
            <ul className="app-multi-filter__items">
                {
                    items.map((item) => {
                        const {id, value} = item
                        let className = "app-multi-filter__item"
                        if(id === active){
                            className += " active-flter"
                        }
                        return (
                            <li
                                className={className}
                                key={item.id}
                                onClick={() => setActive(id)}
                            >
                                {value}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MultiFilter
