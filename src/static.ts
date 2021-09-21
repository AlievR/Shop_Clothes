import {IgenderClothes} from './type/shop'
import { IfiltersItem , filtersType, sortType, 
colorType, sizeType} from './type/filter'



export const genderCategory : IgenderClothes[] = [
    { id: 0, value: "Мужчинам", name: "man" },
    { id: 1, value: "Женщинам", name: "woman" }
]

const sortOptions = [sortType.popular, sortType.increase, sortType.decrease]

const sizeOptions  = [sizeType.xs,sizeType.s,sizeType.m, sizeType.l, sizeType.xl]

const colorOptions  = [colorType.white, colorType.black,colorType.blue, 
colorType.beige, colorType.green, colorType.brown]

export const filters : IfiltersItem[] = [
    { id: 0, nameFilter: filtersType.sort, label: "Сортировать", options: sortOptions },
    { id: 1, nameFilter: filtersType.size, label: "Размер", options: sizeOptions },
    { id: 2, nameFilter: filtersType.color, label: "Цвет", options: colorOptions }
]

