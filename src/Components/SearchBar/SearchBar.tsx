import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchCategory } from '../../redux/actions/filters'
import './SearchBar.scss'

const SearchBar: React.FC = () => {

    const dispatch = useDispatch()

    const [term, setTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTerm(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        dispatch(searchCategory(term))
        setTerm('')
        e.preventDefault()
    }



    return (
        <form
            className="app-searchBar"
            onSubmit={handleSubmit}
            >
            <input
                className="app-searchBar__input"
                type="text" 
                placeholder="Что вы ищете?"
                value={term}
                onChange={handleChange}
                />
            <button
                className="app-searchBar__btn"
                type="submit" />
        </form>
    )
}

export default SearchBar