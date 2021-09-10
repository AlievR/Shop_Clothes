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
    PAGINATION_CATEGORY = "category/paginationCategory"
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


interface IpaginationCategoryAction {
    type: categoryActionTypes.PAGINATION_CATEGORY,
    payload: number
}


export type IfiltersAction = IsizeCategoryAction 
| IcolorCategoryAction | IsortCategoryAction 
| IsearchCategoryAction | IpaginationCategoryAction