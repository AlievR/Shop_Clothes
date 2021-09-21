import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/reducers";


const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('basket');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}; 

const store = createStore(rootReducer,  
    loadFromLocalStorage(),
    compose(applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
)


store.subscribe(() => {
    localStorage.setItem('basket', JSON.stringify(store.getState()))
});

export default store