import { createStore, combineReducers } from 'redux';
import menuReducer from '../containers/Menu/Reducer'


// combine all reducers into a single root reducer
const rootReducer = combineReducers({
    menu: menuReducer
    //restaurant: restaurantReducer
    //cart: cartReducer
})


export default createStore(rootReducer);

