import React from 'react'
import Categories from '../../Components/Categoties/Categories'
import ClotheCards from '../../Components/ClotheCards/ClotheCards'
import Gender from '../../Components/Gender/Gender'
import './Main.scss'


const Main: React.FC = () => {
    return (
        <main className="app-main">
            <div className="app-main__container">
                <div>
                    <Gender />
                </div>
                <Categories />
                <ClotheCards />
            </div>
        </main>
    )
}

export default Main
