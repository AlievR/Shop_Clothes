export interface IcategoryPosition {
    id: number,
    value: string
}

export interface Icategories {
    id: number,
    label: string,
    items: IcategoryPosition[]
}

export interface IcategoryComponent {
    items: IcategoryPosition[]
}

export interface IlistClothesMan {
    id : number,
    name : string,
    price : number,
    sizes : IcategoryPosition[],
    color : string,
    img_main: string,
    img_card1 : string,
    img_card2 : string,
}

export interface IclothesItemComponent {
    item: IlistClothesMan
}
