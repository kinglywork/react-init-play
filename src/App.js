import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {hot} from 'react-hot-loader';

import {Home, About, Contact, Header, Navigation} from "./Component";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Header/>
					<Navigation/>
					<Route exact path={'/'} component={Home}/>
					<Route path={'/about'} component={About}/>
					<Route path={'/contact'} component={Contact}/>
				</Fragment>
			</Router>
		);
	}
}

export default hot(module)(App);