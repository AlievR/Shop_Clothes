import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/reducers";



const store = createStore(rootReducer,  
    compose(applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
)
  
export default store