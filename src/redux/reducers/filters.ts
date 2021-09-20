import { IfiltersState, filtersActionTypes, IfiltersAction } from '../../type/filter'
import { RootState } from './index'
import { createSelector } from 'reselect'
import {selectClothesLength} from './clothes'

const initialState: IfiltersState = {
    sizes: [],
    colors: [],
    sort: "popular",
    search: '',
    currentPage: 1,
    clothesPerPage: 8,
}

export const filters = (state = initialState, action: IfiltersAction): IfiltersState => {
    switch (action.type) {
        case filtersActionTypes.SIZE_FILTERS:
            const { sizes } = state
            if (sizes.includes(action.payload)) {
                return {
                    ...state,
                    sizes: sizes.filter((size) => size !== action.payload)
                }
            }
            return {
                ...state,
                sizes: [...state.sizes, action.payload],
                currentPage: 1
            }
        case filtersActionTypes.COLOR_FILTERS:
            const { colors } = state
            if (colors.includes(action.payload)) {
                return {
                    ...state,
                    colors: colors.filter((color) => color !== action.payload)
                }
            }
            return {
                ...state,
                colors: [...state.colors, action.payload],
                currentPage: 1
            }
        case filtersActionTypes.SORT_FILTERS:
            return { ...state, sort: action.payload,currentPage: 1 }
        case filtersActionTypes.SEARCH_FILTERS:
            return { ...state, search: action.payload, currentPage: 1 }
        case filtersActionTypes.CLEAR_FILTERS:
            return { ...state, sizes: [], colors: [], sort: "popular", search: '', currentPage: 1 }
        case filtersActionTypes.PAGINATION:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}

export const selectSort = (state: RootState) => state.filters.sort;
export const selectSizes = (state: RootState) => state.filters.sizes;
export const selectColors = (state: RootState) => state.filters.colors;

export const selectTotalPage = (state: RootState) => state.filters.clothesPerPage * state.filters.currentPage;

export const fillArrayPagination = createSelector(
    selectClothesLength,
    (state: RootState) => state.filters.clothesPerPage,
    (ClothesLength, clothesPerPage) => {
        const currentPage = Math.ceil(ClothesLength / clothesPerPage)
        return currentPage;
    }
)