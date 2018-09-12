import { ADD_QUESTIONS } from '../constants/actionTypes'

const INITIAL_STATE = [];

const applyAddQuestions = (state, action) => action.questions;

function questionsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_QUESTIONS: {
            return applyAddQuestions(state, action);
        }
        default: return state;
    }
}

export default questionsReducer;