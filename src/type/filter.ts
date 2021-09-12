export interface IcategoryState {
    sizes: string[],
    colors: string[],
    sort: string,
    search: string
}


export enum categoryActionTypes {
    SIZE_CATEGORY = "category/sizeCategory",
    COLOR_CATEGORY = "category/colorCategory",
    SORT_CATEGORY = "category/sortCategory",
    SEARCH_CATEGORY = "category/searchCategory",
    CLEAR_CATEGORY = "ategory/clearCategory"
}

export enum category {
    sort = "sort",
    size = "size",
    color = "color"
}

export enum categorySort {
    popular = "popular",
    increase = "increase",
    decrease = "decrease",
}

export enum categoryColor {
    white = "white",
    black = "black",
    blue = "blue",
    beige = "beige",
    green = "green",
    brown = "brown"
}

export enum categorySize {
    xs = "xs",
    s = "s",
    m = "m",
    l = "l",
    xl = "xl"
}

interface IsizeCategoryAction {
    type: categoryActionTypes.SIZE_CATEGORY,
    payload: string
}


interface IcolorCategoryAction {
    type: categoryActionTypes.COLOR_CATEGORY,
    payload: string
}

interface IsortCategoryAction {
    type: categoryActionTypes.SORT_CATEGORY,
    payload: string
}

interface IsearchCategoryAction {
    type: categoryActionTypes.SEARCH_CATEGORY,
    payload: string
}

interface IclearCategoryAction {
    type: categoryActionTypes.CLEAR_CATEGORY
}


export type IfiltersAction = IsizeCategoryAction 
| IcolorCategoryAction | IsortCategoryAction 
| IsearchCategoryAction | IclearCategoryAction