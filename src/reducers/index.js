import { combineReducers } from 'redux';
import questionReducer from './question';
import questionsReducer from './questions';

const rootReducer = combineReducers({
    questionState : questionReducer,
    questionsState: questionsReducer,
});

export default rootReducer;