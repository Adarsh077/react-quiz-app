import Axios from 'axios';

Axios.defaults.baseURL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8000'
		: 'https://react-quiz-app-aj.herokuapp.com';

// DO NOT MODIFY!! This code returns the res.data in .then()
Axios.interceptors.response.use(function (response) {
	return response.data;
});

export default Axios;
