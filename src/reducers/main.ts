import {combineReducers} from 'redux';
import { selectedProjectReducer } from './selectedProjectReducer';
import { showProjectsReducer } from './AllProjectsReducer';

export default combineReducers({
    selectedProject :selectedProjectReducer,
    showProjects: showProjectsReducer
});