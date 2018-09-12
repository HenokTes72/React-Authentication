import { takeEvery, all } from 'redux-saga/effects';
import { QUESTION_FETCH, QUESTIONS_FETCH } from '../constants/actionTypes';
import { handleFetchQuestion } from './question';
import { handleFetchQuestions } from './questions';

function* watchAll() {
    yield all([
        takeEvery(QUESTION_FETCH, handleFetchQuestion),
        takeEvery(QUESTIONS_FETCH, handleFetchQuestions)
    ])
}

export default watchAll;