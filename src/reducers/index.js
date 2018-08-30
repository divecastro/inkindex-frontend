import { combineReducers } from 'redux';
import DummyReducer from './reducer_dummy';
import ResultsReducer from './reducer_results';
import FiltersReducer from './reducer_filters';

const rootReducer = combineReducers({
    dummy: DummyReducer,
    results: ResultsReducer,
    filters: FiltersReducer
});

export default rootReducer;
