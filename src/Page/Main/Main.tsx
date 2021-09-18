import React from 'react'
import FilterList from '../../Components/FilterList/FilterList'
import ClotheCards from '../../Components/ClotheCards/ClotheCards'
import Gender from '../../Components/Gender/Gender'
import './Main.scss'


const Main: React.FC = () => {
    return (
        <main className="app-main">
            <div className="app-main__container">
                <Gender />
                <FilterList />
                <ClotheCards />
            </div>
        </main>
    )
}

export default Main
