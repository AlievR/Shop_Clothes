import { IfiltersState, filtersActionTypes, IfiltersAction } from '../../type/filter'
import { RootState } from './index'

const initialState: IfiltersState = {
    size: 'all',
    color: 'all',
}

export const filters = (state = initialState, action: IfiltersAction): IfiltersState => {
    switch (action.type) {
        case filtersActionTypes.SIZE_FILTERS:
            return { ...state, size: action.payload }
        case filtersActionTypes.COLOR_FILTERS:
            return { ...state, color: action.payload }
        default:
            return state
    }
}



export const selectOptionsCategory = (state: RootState, name: string) => {
    const {size, color} = state.filters
    switch(name){
        case 'size': return size.toUpperCase();
        case 'color': return color.toUpperCase();
        default: return null
    }
}

export const selectColor = (state: RootState) => state.filters.color;