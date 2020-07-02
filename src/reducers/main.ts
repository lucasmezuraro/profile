import {combineReducers} from 'redux';
import { selectedProjectReducer } from './selectedProjectReducer';

export default combineReducers({
    selectedProject :selectedProjectReducer
});