import {
    ADD_QUESTION,
    ADD_QUESTIONS,
    QUESTION_FETCH,
    QUESTIONS_FETCH,
} from '../constants/actionTypes';

// const doFetchErrorStories = error => ({
//     type: STORIES_FETCH_ERROR,
//     error,
// })

const doAddQuestion = question => ({
    type: ADD_QUESTION,
    question,
});

const doAddQuestions = questions => ({
    type: ADD_QUESTIONS,
    questions,
});

const doFetchQuestion = id => ({
    type: QUESTION_FETCH,
    id,
});

const doFetchQuestions = () => ({
    type: QUESTIONS_FETCH,
});


export {
    doAddQuestion,
    doAddQuestions,
    doFetchQuestion,
    doFetchQuestions,
};