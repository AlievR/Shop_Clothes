export interface IbasketItems {
    id : string,
    name : string,
    price : number,
    size : string,
    color : string,
    img_main: string,
    count: number,
    totalPrice: number
}

export interface IbasketApplicant {
    id : string,
    name : string,
    price : number,
    size : string,
    color : string,
    img_main: string
}

export interface IbasketState {
    items: IbasketItems[],
    totalSum: number,
    totalCount: number
}

export interface IbasketPayload {
    id : string,
    size : string,
    action: string
}

export interface IbasketItemComponent {
    id: string
}

export enum basketActionTypes {
    ADD_BASKET = "basket/addItem",
    MINUS_BASKET = "basket/minusItem",
    DELETE_BASKET = "basket/deleteItem",
    DELETE_ALL_BASKET = "basket/deleteAllItem",
}

export enum basketActionButton {
    plus = "plus",
    minus = "minus",
    delete = "delete"
}

interface IbasketAddAction {
    type: basketActionTypes.ADD_BASKET
    payload: IbasketApplicant
}

interface IbasketMinusAction {
    type: basketActionTypes.MINUS_BASKET
    payload: IbasketApplicant
}

interface IbasketDeleteAction {
    type: basketActionTypes.DELETE_BASKET
    payload: IbasketApplicant
}

interface IbasketDeleteAllAction {
    type: basketActionTypes.DELETE_ALL_BASKET
}


export type IbasketAction = IbasketAddAction | IbasketMinusAction 
| IbasketDeleteAction | IbasketDeleteAllAction