import { IclothesState, IclothesAction, clothesActionTypes } from '../../type/shop'
import { sortType } from '../../type/filter'
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
export const selectError = (state: RootState) => state.clothes.error;
export const selectGender = (state: RootState) => state.clothes.gender;
export const selecCtlothesById = (state: RootState, id: number) => {
    return state.clothes.items.find((item) => item.id === id)
}


export const selectSearchClothes = createSelector(
    selectClothes,
    (state: RootState) => state.filters.search,
    (items, search) => {
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
    (state: RootState) => state.filters.sizes,
    (state: RootState) => state.filters.colors,
    (searchClothes, sizes, colors) => {
        if (colors.length === 0 && sizes.length === 0) {
            return searchClothes
        }
        return searchClothes.filter((item) => {
            const { size, color } = item
            const sizeMatches = sizes.length === 0 || sizes.some(item => size.includes(item))
            const colorMatches = colors.length === 0 || colors.includes(color)
            return sizeMatches && colorMatches
        })
    }
)

export const selectClothesLength = createSelector(
    selectFilteredClothes,
    (selectFilteredClothes) => selectFilteredClothes.length
);


export const selectPaginationClothes = createSelector(
    selectFilteredClothes,
    (state: RootState) => state.filters.currentPage,
    (state: RootState) => state.filters.clothesPerPage,
    (filteredClothes, currentPage, clothesPerPage) =>{
        const indexOfLastPost = currentPage * clothesPerPage
        return filteredClothes.slice(0, indexOfLastPost)
    }
)


export const selectSortClothes = createSelector(
    selectPaginationClothes,
    (state: RootState) => state.filters.sort,
    (paginationClothes, sort) => {
        const newList = [...paginationClothes]
        switch (sort) {
            case sortType.popular: return paginationClothes
            case sortType.increase:
                return newList.sort((a, b) => a.price - b.price)
            case sortType.decrease:
                return newList.sort((a, b) => b.price - a.price)
            default: return paginationClothes
        }
    }
)

export const selectClothesIds = createSelector(
    selectSortClothes,
    (selectSortClothes) => selectSortClothes.map((item) => item.id)
);

