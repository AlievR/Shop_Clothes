import { combineReducers } from "redux";
import {clothes} from './clothes'
import {filters} from './filters'
import {basket} from './basket'

export const rootReducer = combineReducers({
    clothes, filters, basket
});



export type RootState = ReturnType<typeof rootReducer>