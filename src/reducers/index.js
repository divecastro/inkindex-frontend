import { combineReducers } from 'redux';
import DummyReducer from './reducer_dummy';
import ResultsReducer from './reducer_results';

const rootReducer = combineReducers({
    dummy: DummyReducer,
    results: ResultsReducer
});

export default rootReducer;
