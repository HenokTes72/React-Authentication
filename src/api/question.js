import axios from 'axios';

const HN_BASE_URL = 'http://localhost:8081';

const fetchAllQuestions = () =>
    axios(HN_BASE_URL);

const fetchSingleQuestion = id =>
    axios(getWebPath(id));

const getWebPath = id => `http://localhost:8081/${id}`;

export { fetchAllQuestions, fetchSingleQuestion };