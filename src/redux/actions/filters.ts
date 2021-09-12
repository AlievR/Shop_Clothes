import { IfiltersAction, categoryActionTypes, category } from '../../type/filter'


export const dispatchCategory = (nameCategory: string, value: string) => {
    switch (nameCategory) {
        case category.size:
            return sizeCategory(value)
        case category.color:
            return colorCategory(value)
        case category.sort:
            return sortCategory(value)
    }
}

const sizeCategory = (size: string): IfiltersAction => ({
    type: categoryActionTypes.SIZE_CATEGORY,
    payload: size
})


const colorCategory = (color: string): IfiltersAction => ({
    type: categoryActionTypes.COLOR_CATEGORY,
    payload: color
})

const sortCategory = (sort: string): IfiltersAction => ({
    type: categoryActionTypes.SORT_CATEGORY,
    payload: sort
})


export const searchCategory = (term: string): IfiltersAction => ({
    type: categoryActionTypes.SEARCH_CATEGORY,
    payload: term
})


export const clearCategory = (): IfiltersAction => ({
    type: categoryActionTypes.CLEAR_CATEGORY
})




