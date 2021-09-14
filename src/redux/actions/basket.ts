import { IbasketAction, basketActionTypes, IbasketPayload } from '../../type/basket'


export const addItemBasket = (item: IbasketPayload): IbasketAction => ({
    type: basketActionTypes.ADD_BASKET,
    payload: item
})

export const minusItemBasket = (item: IbasketPayload): IbasketAction => ({
    type: basketActionTypes.MINUS_BASKET,
    payload: item
})
