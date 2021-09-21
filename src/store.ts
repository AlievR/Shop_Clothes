import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./redux/reducers";
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'


const store = createStore(rootReducer,
  loadFromLocalStorage(),
  compose(applyMiddleware(thunk))
)


store.subscribe(() => {
  saveToLocalStorage({
    basket: store.getState().basket,
    clothes: store.getState().clothes
  });
});



export default store