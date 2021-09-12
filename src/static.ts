import {Icategories, IcategoryPosition, IgenderClothes} from './type/shop'
import {category, categorySort, categoryColor, categorySize} from './type/filter'



export const genderCategory : IgenderClothes[] = [
    { id: 0, value: "Мужчинам", name: "man" },
    { id: 1, value: "Женщинам", name: "woman" }
]

const sortPosition : IcategoryPosition[] = [
    { id: 0, name: categorySort.popular, value: "По популярности" },
    { id: 1, name: categorySort.increase, value: "Цена по возрастанию" },
    { id: 2, name: categorySort.decrease, value: "Цена по убыванию" }
]

const sizePosition : IcategoryPosition[] = [
    { id: 0, name: categorySize.xs, value: "XS" },
    { id: 1, name: categorySize.s, value: "S" },
    { id: 2, name: categorySize.m, value: "M" },
    { id: 3, name: categorySize.l, value: "L" },
    { id: 4, name: categorySize.xl, value: "XL" }
]

const colorPosition : IcategoryPosition[] = [
    { id: 0, name: categoryColor.white, value: "Белый" },
    { id: 1, name: categoryColor.black, value: "Черный" },
    { id: 2, name: categoryColor.blue, value: "Синий" },
    { id: 3, name: categoryColor.beige, value: "Бежевый" },
    { id: 4, name: categoryColor.green, value: "Зеленый" },
    { id: 5, name: categoryColor.brown, value: "Коричневый" }
]

export const categories : Icategories[] = [
    { id: 0, nameCategory: category.sort, label: "Сортировать", options: sortPosition },
    { id: 1, nameCategory: category.size, label: "Размер", options: sizePosition },
    { id: 2, nameCategory: category.color, label: "Цвет", options: colorPosition }
]

