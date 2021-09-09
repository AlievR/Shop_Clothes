export interface IgenderClothes {
    id: number,
    value: string,
    name: string
}


export interface IcategoryPosition {
    id: number,
    name: string
    value: string
}

export interface Icategories {
    id: number,
    nameCategory: string,
    label: string,
    options: IcategoryPosition[]
}


export interface IlistClothes {
    id : number,
    name : string,
    price : number,
    sizes : string[],
    colors : string,
    img_main: string,
    img_card1 : string,
    img_card2 : string,
}

export interface IclothesItemComponent {
    id: number
}

interface IbuttonProps {
    nameCategory: string,
    label: string,
    options: IcategoryPosition[]
}

interface ImuiltiProps {
    nameCategory: string,
    options: IcategoryPosition[]
}

export interface IbuttonDropComponent {
    items: IbuttonProps
}

export interface ImultiFilterComponent {
    items: ImuiltiProps
}

export interface IcategoryComponent {
    options: ImuiltiProps
}

export enum clothesActionTypes {
    FETCH_CLOTHES = "clothes/clothesFetch",
    LOADING_CLOTHES = "clothes/clothesLoading",
    ERROR_CLOTHES = "clothes/clothesError",
    GENDER_CLOTHES = "clothes/clothesGender",
}

export interface IclothesState {
    items: IlistClothes[],
    loading: boolean,
    error: null | string,
    gender: string
}

interface IfetchClothesAction {
    type: clothesActionTypes.FETCH_CLOTHES,
    payload: IlistClothes[]
}

interface IloadingClothesAction {
    type: clothesActionTypes.LOADING_CLOTHES,
    payload: boolean
}

interface IerrorClothesAction {
    type: clothesActionTypes.ERROR_CLOTHES,
    payload: string
}

interface IgenderClothesAction {
    type: clothesActionTypes.GENDER_CLOTHES,
    payload: string
}

export type IclothesAction = IfetchClothesAction | IloadingClothesAction 
| IerrorClothesAction | IgenderClothesAction