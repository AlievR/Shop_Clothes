import { IclothesState, IclothesAction, clothesActionTypes } from '../../type/shop'
import {sortClothes} from '../../type/shop'
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
export const selectLoading = (state: RootState) => state.clothes.loading;
export const selectError= (state: RootState) => state.clothes.error;
export const selectGender= (state: RootState) => state.clothes.gender;
export const selecCtlothesById  = (state: RootState, id : number) => {
    return state.clothes.items.find((item) => item.id === id)
}

export const selectSearchClothes = createSelector(
    selectClothes,
    (state: RootState) => state.filters,
    (items, filters)  => {
        const {search} = filters
        if (search === '') {
            return items;
        }
        return items.filter((item) => item.name
        .toLowerCase()  
        .indexOf(search.toLowerCase()) > -1); 
    }
)


export const selectFilteredClothes = createSelector(
    selectSearchClothes,
    (state: RootState) => state.filters,
    (items, filters)  => {
        const {sizes, colors} = filters
        if(colors.length === 0 && sizes.length === 0){
            return items
        }
        return items.filter( (item) => {
            const {size, color} = item
            const sizeMatches = sizes.length === 0 || sizes.some( item => size.includes(item))
            const colorMatches = colors.length === 0 || colors.includes(color)
            return sizeMatches && colorMatches
        })
    }
)

export const selectSortClothes = createSelector(
    selectFilteredClothes,
    (state: RootState) => state.filters,
    (items, filters)  => {
        const {sort} = filters
        const newList = [...items]
        switch(sort){
            case sortClothes.popular: return items
            case sortClothes.increase: 
                return newList.sort( (a,b) => a.price - b.price)
            case sortClothes.decrease: 
                return newList.sort((a,b) => b.price - a.price)
            default: return items
        }
    }
)

export const selectClothesIds = createSelector(
    selectSortClothes,
    (sortClothes) => sortClothes.map((item) => item.id)
  );


  export const selectClothesLength = createSelector(
    selectClothesIds,
    (selectClothesIds) => selectClothesIds.length
  );
