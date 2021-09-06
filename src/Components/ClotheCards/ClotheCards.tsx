import React, {useEffect, useState} from 'react'
import ClotheCard from '../ClotheCard/ClotheCard'
import { IlistClothesMan } from '../../type/shop'
import './ClotheCards.scss'
import axios from 'axios'

const ClotheCards: React.FC = () => {
    
   const [items, setItems] = useState<IlistClothesMan[]>([])

    useEffect( ()=> {
        async function fetchMyAPI() {
            let response = await axios.get<IlistClothesMan[]>('http://localhost:3001/man-clothes')
            setItems(response.data)
          }
          fetchMyAPI()
    }, [] )




    return (
        <section className="app-list-clothes">
            <div className="app-list-clothes__intro">
                <h2 className="app-list-clothes__title">Найдено 12 моделей</h2>
                <div className="app-list-clothes__items">
                    {
                        items.map((item) => {
                            return (
                                <article 
                                className="app-list-clothes__item"
                                key={item.id}>
                                    <ClotheCard item={item} />
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ClotheCards
