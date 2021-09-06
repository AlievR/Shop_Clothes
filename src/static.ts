import {Icategories, IcategoryPosition} from './type/shop'


const sortPosition : IcategoryPosition[] = [
    { id: 0, value: "По популярности" },
    { id: 1, value: "Цена по возрастанию" },
    { id: 2, value: "Цена по убыванию" }
]

const sizePosition : IcategoryPosition[] = [
    { id: 0, value: "XS" },
    { id: 1, value: "S" },
    { id: 2, value: "M" },
    { id: 3, value: "L" },
    { id: 4, value: "XL" }
]

const colorPosition : IcategoryPosition[] = [
    { id: 0, value: "Белый" },
    { id: 1, value: "Черный" },
    { id: 2, value: "Синий" },
    { id: 3, value: "Красный" },
    { id: 4, value: "Зеленый" }
]

export const categories : Icategories[] = [
    { id: 0, label: "Сортировать", items: sortPosition },
    { id: 1, label: "Размер", items: sizePosition },
    { id: 2, label: "Цвет", items: colorPosition },
    { id: 3, label: "Цена", items: sortPosition }
]

