import {Icategories, IcategoryPosition, IgenderClothes} from './type/shop'


export const genderCategory : IgenderClothes[] = [
    { id: 0, value: "Мужчинам", name: "man" },
    { id: 1, value: "Женщинам", name: "woman" }
]

const sortPosition : IcategoryPosition[] = [
    { id: 0, name: "popular", value: "По популярности" },
    { id: 1, name: "increase", value: "Цена по возрастанию" },
    { id: 2, name: "decrease", value: "Цена по убыванию" }
]

const sizePosition : IcategoryPosition[] = [
    { id: 0, name: "xs", value: "XS" },
    { id: 1, name: "s", value: "S" },
    { id: 2, name: "m", value: "M" },
    { id: 3, name: "l", value: "L" },
    { id: 4, name: "xl", value: "XL" }
]

const colorPosition : IcategoryPosition[] = [
    { id: 0, name: "white", value: "Белый" },
    { id: 1, name: "black", value: "Черный" },
    { id: 2, name: "blue", value: "Синий" },
    { id: 3, name: "beige", value: "Бежевый" },
    { id: 4, name: "green", value: "Зеленый" },
    { id: 5, name: "brown", value: "Коричневый" }
]

export const categories : Icategories[] = [
    { id: 0, nameCategory: "sort", label: "Сортировать", options: sortPosition },
    { id: 1, nameCategory: "size", label: "Размер", options: sizePosition },
    { id: 2, nameCategory: "color", label: "Цвет", options: colorPosition }
]

