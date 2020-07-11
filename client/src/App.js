import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { JoinForm, Quiz, Results } from './pages';
import { Navbar } from './components';

function App() {
	return (
		<div>
			<Navbar />

			<Switch>
				<Route path='/join-form' component={JoinForm} />
				<Route path='/quiz' component={Quiz} />
				<Route path='/results' component={Results} />
				<Redirect from='/' to='/join-form' />
			</Switch>
		</div>
	);
}

export default App;
