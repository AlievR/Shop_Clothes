import { IclothesState, IclothesAction, clothesActionTypes, IlistClothes } from '../../type/shop'
import {IfiltersState} from '../../type/filter'
import { createSelector } from 'reselect'
import { RootState } from './index'

const initialState: IclothesState = {
    items: [],
    loading: false,
    error: null,
    gender: "man"
}

export const clothes = (state = initialState, action: IclothesAction): IclothesState => {
    switch (action.type) {
        case clothesActionTypes.FETCH_CLOTHES:
            return { ...state, items: action.payload }
        case clothesActionTypes.LOADING_CLOTHES:
            return { ...state, loading: action.payload }
        case clothesActionTypes.ERROR_CLOTHES:
            return { ...state, error: action.payload }
        case clothesActionTypes.GENDER_CLOTHES:
            return { ...state, gender: action.payload }
        default:
            return state
    }
}

export const selectClothes = (state: RootState) => state.clothes.items;
export const selectClothesIds = (state: RootState) => state.clothes.items.map(item => item.id)
export const selectClothesLength = (state: RootState) => state.clothes.items.length;
export const selectLoading = (state: RootState) => state.clothes.loading;
export const selectError= (state: RootState) => state.clothes.error;
export const selectGender= (state: RootState) => state.clothes.gender;
export const selecCtlothesById  = (state: RootState, id : number) => {
    return state.clothes.items.find((item) => item.id === id)
}


export const selectFilteredClothes = createSelector(
    selectClothes,
    (state: RootState) => state.filters,
    (items, filters)  => {
        const {size, color} = filters
        if(color === "all" && size === "all"){
            return items
        }
        return items.filter( (item) => {
            const {sizes, colors} = item
            const sizeMatches = size === "all" || sizes.includes(size)
            console.log(color, colors)
            const colorMatches = color === "all" || colors === color
            return sizeMatches && colorMatches
        })
    }
)


export const selectFilteredTodoIds = createSelector(
    selectFilteredClothes,
    (filteredClothes) => filteredClothes.map((item) => item.id)
  );
