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

export interface IbasketState {
    items: IbasketItems[],
    totalSum: number,
    totalCount: number
}

export interface IbasketPayload {
    id : string,
    size : string,
}

export interface IbasketItemComponent {
    id: string
}

export enum basketActionTypes {
    ADD_BASKET = "basket/addItem",
    MINUS_BASKET = "basket/minusItem"
}

interface IbasketAddAction {
    type: basketActionTypes.ADD_BASKET
    payload: IbasketPayload
}

interface IbasketMinusAction {
    type: basketActionTypes.MINUS_BASKET
    payload: IbasketPayload
}

export type IbasketAction = IbasketAddAction | IbasketMinusAction