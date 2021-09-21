import { IbasketAction, basketActionTypes, IbasketApplicant } from '../../type/basket'


export const addItemAction = (item: IbasketApplicant): IbasketAction => ({
    type: basketActionTypes.ADD_BASKET,
    payload: item
})

export const minusItemAction = (item: IbasketApplicant): IbasketAction => ({
    type: basketActionTypes.MINUS_BASKET,
    payload: item
})

export const deleteItemAction = (item: IbasketApplicant): IbasketAction => ({
    type: basketActionTypes.DELETE_BASKET,
    payload: item
})

export const deleteAllItemAction = (): IbasketAction => ({
    type: basketActionTypes.DELETE_ALL_BASKET
})


