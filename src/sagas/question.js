import { call, put } from 'redux-saga/effects';
import { doAddQuestion } from '../actions/question';
import { fetchSingleQuestion } from '../api/question';

function* handleFetchQuestion(action) {
    const { id } = action;

    try {
        const result = yield call(fetchSingleQuestion, id);
        // The put instruction instructs the middleware to dispatch an action.
        yield put(doAddQuestion(result.data));
    } catch (error) {
        // yield put(doFetchErrorStories(error));
        console.log("ERROR: something has failed");
    }
}

export {
    handleFetchQuestion,
};