import { combineReducers } from 'redux';
import DummyReducer from './reducer_dummy';


const rootReducer = combineReducers({
    dummy: DummyReducer
});

export default rootReducer;
