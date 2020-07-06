import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/main';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, compose(
    // Add other middleware on this line...
    applyMiddleware(thunk),
));

export default store;