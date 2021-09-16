import { Dispatch, SetStateAction } from "react";

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
    size : string[],
    color : string,
    img_main: string,
    img_card1 : string,
    img_card2 : string,
}



export interface IclothesItemComponent {
    id: number
}

interface IbuttonProps {
    nameCategory: string,
    options: IcategoryPosition[]
}

interface ImuiltiProps {
    nameCategory: string,
    options: IcategoryPosition[]
}


export interface IbuttonDropComponent {
    label: string
}

export interface ImultiFilterComponent {
    items: IbuttonProps
}

export interface IcategoryComponent {
    options: ImuiltiProps
}

export interface IsectionComponent {
    sizes: string[],
    activeSize: string,
    handleClickActiveSize: (selectedSize: string) => void,
    setIsComponentVisible ?: Dispatch<SetStateAction<boolean>> 
}

export interface IpaginationComponent {
    paginatioPage: number,
    lengthClothes: number
}

export enum clothesActionTypes {
    FETCH_CLOTHES = "clothes/clothesFetch",
    LOADING_CLOTHES = "clothes/clothesLoading",
    ERROR_CLOTHES = "clothes/clothesError",
    GENDER_CLOTHES = "clothes/clothesGender",
    PAGINATION_CLOTHES= "clothes/clothesPagination"
}

export interface IclothesState {
    items: IlistClothes[],
    loading: boolean,
    error: null | string,
    gender: string,
    currentPage: number,
    clothesPerPage: number,
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

interface IpaginationClothesAction {
    type: clothesActionTypes.PAGINATION_CLOTHES,
    payload: number
}


export type IclothesAction = IfetchClothesAction | IloadingClothesAction 
| IerrorClothesAction | IgenderClothesAction | IpaginationClothesAction