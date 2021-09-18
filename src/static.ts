import {IgenderClothes} from './type/shop'
import { IfiltersItem, IfilterPosition , filtersType, sortType, 
colorType, sizeType} from './type/filter'



export const genderCategory : IgenderClothes[] = [
    { id: 0, value: "Мужчинам", name: "man" },
    { id: 1, value: "Женщинам", name: "woman" }
]

const sortPosition : IfilterPosition[] = [
    { id: 0, name: sortType.popular, value: "По популярности" },
    { id: 1, name: sortType.increase, value: "Цена по возрастанию" },
    { id: 2, name: sortType.decrease, value: "Цена по убыванию" }
]

const sizePosition : IfilterPosition[] = [
    { id: 0, name: sizeType.xs, value: "XS" },
    { id: 1, name: sizeType.s, value: "S" },
    { id: 2, name: sizeType.m, value: "M" },
    { id: 3, name: sizeType.l, value: "L" },
    { id: 4, name: sizeType.xl, value: "XL" }
]

const colorPosition : IfilterPosition[] = [
    { id: 0, name: colorType.white, value: "Белый" },
    { id: 1, name: colorType.black, value: "Черный" },
    { id: 2, name: colorType.blue, value: "Синий" },
    { id: 3, name: colorType.beige, value: "Бежевый" },
    { id: 4, name: colorType.green, value: "Зеленый" },
    { id: 5, name: colorType.brown, value: "Коричневый" }
]

export const filters : IfiltersItem[] = [
    { id: 0, nameFilter: filtersType.sort, label: "Сортировать", options: sortPosition },
    { id: 1, nameFilter: filtersType.size, label: "Размер", options: sizePosition },
    { id: 2, nameFilter: filtersType.color, label: "Цвет", options: colorPosition }
]

