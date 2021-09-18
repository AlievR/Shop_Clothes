export interface IfilterPosition {
    id: number,
    name: string
    value: string
}

export interface IfiltersItem {
    id: number,
    nameFilter: string,
    label: string,
    options: IfilterPosition[]
}


interface IfilterProps {
    nameFilter: string,
    options: IfilterPosition[]
}


export interface IfilterListItemComponent {
    items: IfilterProps,
    handleClickActiveFilter: (nameFilter: string, payload: string) => void
}


export interface IfiltersState {
    sizes: string[],
    colors: string[],
    sort: string,
    search: string,
    currentPage: number,
    clothesPerPage: number,
}


export enum filtersActionTypes {
    SIZE_FILTERS = "filters/sizeFilters",
    COLOR_FILTERS = "filters/colorFilters",
    SORT_FILTERS = "filters/sortFilters",
    SEARCH_FILTERS = "filters/searchFilters",
    CLEAR_FILTERS = "filters/clearFilters",
    PAGINATION= "clothes/Pagination"
}

export enum filtersType {
    sort = "sort",
    size = "size",
    color = "color"
}

export enum sortType {
    popular = "popular",
    increase = "increase",
    decrease = "decrease",
}

export enum colorType {
    white = "white",
    black = "black",
    blue = "blue",
    beige = "beige",
    green = "green",
    brown = "brown"
}

export enum sizeType {
    xs = "xs",
    s = "s",
    m = "m",
    l = "l",
    xl = "xl"
}

interface IsizeFiltersAction {
    type: filtersActionTypes.SIZE_FILTERS,
    payload: string
}


interface IcolorFiltersAction {
    type: filtersActionTypes.COLOR_FILTERS,
    payload: string
}

interface IsortFiltersAction {
    type: filtersActionTypes.SORT_FILTERS,
    payload: string
}

interface IsearchFiltersAction {
    type: filtersActionTypes.SEARCH_FILTERS,
    payload: string
}

interface IclearFiltersAction {
    type: filtersActionTypes.CLEAR_FILTERS
}


interface IpaginationAction {
    type: filtersActionTypes.PAGINATION,
    payload: number
}



export type IfiltersAction = IsizeFiltersAction | IcolorFiltersAction 
| IsortFiltersAction | IsearchFiltersAction | IclearFiltersAction | IpaginationAction