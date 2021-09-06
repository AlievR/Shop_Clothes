import React from 'react'
import './SearchBar.scss'

const SearchBar: React.FC = () => {
    return (
        <form
            className="app-searchBar">
            <input
                className="app-searchBar__input"
                type="text" 
                placeholder="Что вы ищете?"
                />
            <button
                className="app-searchBar__btn"
                type="submit" />
        </form>
    )
}

export default SearchBar