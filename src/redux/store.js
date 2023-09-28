import { createStore, combineReducers } from 'redux';
import LawyerReducer from './reducers';

const rootReducer = combineReducers({
    Lawyer: LawyerReducer,
});

const store = createStore(rootReducer);

export default store;