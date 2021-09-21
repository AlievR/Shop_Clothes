import { Dispatch, SetStateAction } from "react";


export interface IfilterPosition {
    id: number,
    name: string
    value: string
}

export interface IfiltersItem {
    id: number,
    nameFilter: string,
    label: string,
    options: string[]
}


export interface IfilterListItemComponent {
    options: string[],
    activeValue: string[] | string,
    visible ?: boolean,
    onClick: (payload: string) => void,
    setIsComponentVisible ?: Dispatch<SetStateAction<boolean>> 
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
    popular = "По популярности",
    increase = "По возрастанию",
    decrease = "По убыванию",
}

export enum colorType {
    white = "Белый",
    black = "Черный",
    blue = "Синий",
    beige = "Бежевый",
    green = "Зеленый",
    brown = "Коричневый"
}


export enum sizeType {
    xs = "XS",
    s = "S",
    m = "M",
    l = "L",
    xl = "XL"
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