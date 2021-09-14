import { IbasketState, basketActionTypes, IbasketAction, IbasketPayload, IbasketItems } from '../../type/basket'
import { createSelector } from 'reselect'
import { RootState } from './index'
import store from '../../store'

const initialState: IbasketState = {
    items: [],
    totalSum: 0,
    totalCount: 0
}

const updateOrder = (state: IbasketState, payload: IbasketPayload, quanity: number) => {
    const { id, size } = payload;
    const itemIndex = state.items.findIndex((item) => item.id === id)
    
}


export const basket = (state = initialState, action: IbasketAction): IbasketState => {
    switch (action.type) {
        case basketActionTypes.ADD_BASKET:
            return state
        case basketActionTypes.MINUS_BASKET:
            return state
        default:
            return state
    }
}


const selectBasketItems = (state: RootState) => state.basket.items

export const selectBasketId = createSelector(
    selectBasketItems,
    (basket) => basket.map((item) => item.id)
)
export const selectBasketById = (state: RootState, id: string) => {
    return selectBasketItems(state).find((item) => item.id === id )
}