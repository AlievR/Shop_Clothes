import { IbasketState, basketActionTypes, IbasketAction, IbasketApplicant } from '../../type/basket'
import { createSelector } from 'reselect'
import { RootState } from './index'

const initialState: IbasketState = {
    items: [],
    totalSum: 0,
    totalCount: 0
}

const updateOrder = (state: IbasketState, payload: IbasketApplicant, quanity: number) => {
    const { id } = payload;
    const itemIndex = state.items.findIndex((item) => item.id === id)
    const item = state.items[itemIndex]
    const newItem = updateBasketItem(payload, item, quanity)
    if( newItem.count === 0 ){
        return {
            ...state,
            items: [
                ...state.items.slice(0, itemIndex),
                ...state.items.slice(itemIndex + 1),
            ],
            totalCount: state.totalCount + quanity,
            totalSum: state.totalSum + quanity*payload.price
        }
    }
    if (itemIndex < 0) {
        return {
            ...state,
            items: [...state.items, newItem],
            totalCount: state.totalCount + quanity,
            totalSum: state.totalSum + quanity*payload.price
        }
    } else {
        return {
            ...state,
            items: [
                ...state.items.slice(0, itemIndex),
                newItem,
                ...state.items.slice(itemIndex + 1)
            ],
            totalCount: state.totalCount + quanity,
            totalSum: state.totalSum + quanity*payload.price
        }
    }
}

interface IitemUndefined {
    count: number, 
    totalPrice: number
}

const updateBasketItem = (payload: IbasketApplicant, item = {} as IitemUndefined, quanity: number) => {
    const { count = 0, totalPrice = 0 } = item
    return({...payload, count: count + quanity, totalPrice : totalPrice + quanity*payload.price })
}


 
export const basket = (state = initialState, action: IbasketAction): IbasketState => {
    switch (action.type) {
        case basketActionTypes.ADD_BASKET:
            return updateOrder(state, action.payload, 1)
        case basketActionTypes.MINUS_BASKET:
            return updateOrder(state, action.payload, -1)
        case basketActionTypes.DELETE_BASKET:
            const item = state.items.find( ({id}) => id === action.payload.id )
            return updateOrder(state, action.payload, -item!.count)
        case basketActionTypes.DELETE_ALL_BASKET:
            return {...state, items : [], totalSum : 0, totalCount : 0}
        default:
            return state
    }
}


const selectBasketItems = (state: RootState) => state.basket.items

export const selectTotalSum = (state: RootState) => state.basket.totalSum

export const selectTotalCount = (state: RootState) => state.basket.totalCount

export const selectBasketId = createSelector(
    selectBasketItems,
    (basket) => basket.map((item) => {
        return {id: item.id, size: item.size}
    })
)
export const selectBasketById = (state: RootState, id: string) => {
    return selectBasketItems(state).find((item) => item.id === id)
}