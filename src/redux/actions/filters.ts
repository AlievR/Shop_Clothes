import {IfiltersAction, categoryActionTypes} from '../../type/filter'


export const sizeCategory = (size: string) : IfiltersAction => ({
    type: categoryActionTypes.SIZE_CATEGORY,
    payload: size
})


export const colorCategory = (color: string) : IfiltersAction => ({
    type: categoryActionTypes.COLOR_CATEGORY,
    payload: color
})

export const sortCategory = (sort : string) : IfiltersAction => ({
    type: categoryActionTypes.SORT_CATEGORY,
    payload: sort
})


export const searchCategory = (term : string) : IfiltersAction => ({
    type: categoryActionTypes.SEARCH_CATEGORY,
    payload: term
})