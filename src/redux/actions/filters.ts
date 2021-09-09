import {IfiltersAction, filtersActionTypes} from '../../type/filter'


export const sizeFilters = (size: string) : IfiltersAction => ({
    type: filtersActionTypes.SIZE_FILTERS,
    payload: size
})


export const colorFilters = (color: string) : IfiltersAction => ({
    type: filtersActionTypes.COLOR_FILTERS,
    payload: color
})
