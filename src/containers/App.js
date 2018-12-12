import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {hot} from 'react-hot-loader';

import {Home, About, Contact, Header, Navigation} from "../components/index";
import TodoPage from './Todos/TodoPage';
import ErrorMessage from './ErrorMessage';

const App = ({store}) => (
	<Provider store={store}>
		<Router>
			<Fragment>
				<Header/>
				<ErrorMessage/>
				<Navigation/>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/about'} component={About}/>
				<Route path={'/contact'} component={Contact}/>
				<Route path={'/todo'} component={TodoPage}/>
			</Fragment>
		</Router>
	</Provider>
);

export default hot(module)(App);