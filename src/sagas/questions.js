import { call, put } from 'redux-saga/effects';
import { doAddQuestions } from '../actions/question';
import { fetchAllQuestions } from '../api/question';

function* handleFetchQuestions(action) {
    try {
        const result = yield call(fetchAllQuestions);
        // The put instruction instructs the middleware to dispatch an action.
        yield put(doAddQuestions(result.data));
    } catch (error) {
        // yield put(doFetchErrorStories(error));
        console.log("ERROR: something has failed");
    }
}

export {
    handleFetchQuestions,
};