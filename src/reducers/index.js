import thunk from 'redux-thunk';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

export const init = () => {
    const reducer = combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer
    });

    const composeEnhancer = window._DEVOOLS_EXTENSION_COMPOSE_ || compose;

    const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
    return store;
}