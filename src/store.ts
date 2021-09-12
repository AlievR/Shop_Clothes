import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {rootReducer, RootState} from "./redux/reducers";


const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('state');
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

store.subscribe(() => saveToLocalStorage(store.getState()));


const saveToLocalStorage = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
    }
};
  
export default store