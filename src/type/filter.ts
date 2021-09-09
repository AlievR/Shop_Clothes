export interface IfiltersState {
    size: string,
    color: string
}


export enum filtersActionTypes {
    SIZE_FILTERS = "filters/filtersSize",
    COLOR_FILTERS = "filters/filtersColor"
}


interface IsizeFiltersAction {
    type: filtersActionTypes.SIZE_FILTERS,
    payload: string
}


interface IcolorFiltersAction {
    type: filtersActionTypes.COLOR_FILTERS,
    payload: string
}

export type IfiltersAction = IsizeFiltersAction 
| IcolorFiltersAction