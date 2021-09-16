import { IcategoryState, categoryActionTypes, IfiltersAction } from '../../type/filter'
import { RootState } from './index'
import { createSelector } from 'reselect'

const initialState: IcategoryState = {
    sizes: [],
    colors: [],
    sort: "popular",
    search: ''
}

export const filters = (state = initialState, action: IfiltersAction): IcategoryState => {
    switch (action.type) {
        case categoryActionTypes.SIZE_CATEGORY:
            const { sizes } = state
            if (sizes.includes(action.payload)) {
                return {
                    ...state,
                    sizes: sizes.filter((size) => size !== action.payload)
                }
            }
            return {
                ...state,
                sizes: [...state.sizes, action.payload]
            }
        case categoryActionTypes.COLOR_CATEGORY:
            const { colors } = state
            if (colors.includes(action.payload)) {
                return {
                    ...state,
                    colors: colors.filter((color) => color !== action.payload)
                }
            }
            return {
                ...state,
                colors: [...state.colors, action.payload]
            }
        case categoryActionTypes.SORT_CATEGORY:
            return { ...state, sort: action.payload }
        case categoryActionTypes.SEARCH_CATEGORY:
            return { ...state, search: action.payload }
        case categoryActionTypes.CLEAR_CATEGORY:
            return { ...state, sizes: [], colors: [], sort: "popular", search: '' }
        default:
            return state
    }
}

export const selectFilters = createSelector(
    (state: RootState) => state.filters,
    (filters) => {
        return filters;
    }
)


export const selectOptionsCategory = (state: RootState, name: string) => {
    const { sizes, colors, sort } = state.filters
    switch (name) {
        case 'size': return sizes
        case 'color': return colors
        case 'sort': return sort
        default: return []
    }
}

export const selectSort = (state: RootState) => state.filters.sort;