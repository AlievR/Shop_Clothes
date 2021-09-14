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
    if (itemIndex < 0) {
        const itemsClothes = store.getState().clothes.items
        const item = itemsClothes.find((item) => item.id === Number(id)) 
        const newItem :IbasketItems = {
            id: id + size,
            name: item!.name,
            price: item!.price,
            size : size,
            color : item!.color,
            img_main: item!.img_main,
            count: 1,
            totalPrice: item!.price,
        }
        return {
            ...state,
            items: [...state.items, newItem]
        }
    } else {
        return {
            ...state,
            items: state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        count: item.count + quanity,
                        totalPrice: item.totalPrice + quanity 
                    }
                }
                return item
            })
        }
    }
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