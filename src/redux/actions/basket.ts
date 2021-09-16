import { IbasketAction, basketActionTypes, IbasketApplicant, IbasketPayload } from '../../type/basket'
import {IclothesState} from '../../type/shop'
import { Dispatch } from 'redux'

export const actionBasket = (selectItem : IbasketPayload) => {
    return (dispatch: Dispatch<IbasketAction>, getState: () => { clothes: IclothesState }) => {
        const { items } = getState().clothes
        console.log("selectItem", selectItem)
        const {id, size, action} = selectItem
        const idS = id.replace(/\D+/g,"")
        const item = items.find((item) => item.id === Number(idS))
        const newItem : IbasketApplicant = {
            id: id ,
            name: item!.name,
            price: item!.price,
            size : size,
            color : item!.color,
            img_main: item!.img_main
        }
        switch(action){
            case "plus": 
                return dispatch(addItemAction(newItem))
            case "minus":
                return dispatch(minusItemAction(newItem))
            case "delete":
                return dispatch(deleteItemAction(newItem))
        }
    }
}

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


