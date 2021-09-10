import axios from 'axios'
import { Dispatch } from 'redux'
import { IclothesAction, clothesActionTypes, IclothesState } from '../../type/shop'


export const fetchClothes = () => {
    return async (dispatch: Dispatch<IclothesAction>, getState: () => { clothes: IclothesState }) => {
        const { gender } = getState().clothes
        dispatch(loadingClothes(true))
        try {
            const response = await axios.get(`http://127.0.0.1:3001/${gender}-clothes`)
            dispatch({ type: clothesActionTypes.FETCH_CLOTHES, payload: response.data })
            dispatch(loadingClothes(false))
        }
        catch {
            dispatch(loadingClothes(false));
            dispatch(errorClothes("Ошибка при загрузке данных"));
        }
    }
}

export const loadingClothes = (loading: boolean): IclothesAction => ({
    type: clothesActionTypes.LOADING_CLOTHES,
    payload: loading
})

export const errorClothes = (error: any): IclothesAction => ({
    type: clothesActionTypes.ERROR_CLOTHES,
    payload: error
})

export const genderClothes = (gender: string): IclothesAction => ({
    type: clothesActionTypes.GENDER_CLOTHES,
    payload: gender
})



export const paginationClothes = (currentPage: number) => ({
    type: clothesActionTypes.PAGINATION_CLOTHES,
    payload: currentPage
})

