import { IfiltersAction, filtersActionTypes } from '../../type/filter'



export const sizeFilters = (size: string): IfiltersAction => ({
    type: filtersActionTypes.SIZE_FILTERS,
    payload: size
})


export const colorFilters = (color: string): IfiltersAction => ({
    type: filtersActionTypes.COLOR_FILTERS,
    payload: color
})

export const sortFilters = (sort: string): IfiltersAction => ({
    type: filtersActionTypes.SORT_FILTERS,
    payload: sort
})


export const searchFilters = (term: string): IfiltersAction => ({
    type: filtersActionTypes.SEARCH_FILTERS,
    payload: term
})


export const clearFilters = (): IfiltersAction => ({
    type: filtersActionTypes.CLEAR_FILTERS
})

export const paginationClothes = (currentPage: number) => ({
    type: filtersActionTypes.PAGINATION,
    payload: currentPage
})





