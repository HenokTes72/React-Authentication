import { ADD_QUESTION } from '../constants/actionTypes'

const INITIAL_STATE = {};

const applyAddQuestion = (state, action) => action.question;

function questionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_QUESTION: {
            return applyAddQuestion(state, action);
        }
        default: return state;
    }
}

export default questionReducer;