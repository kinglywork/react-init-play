import React, {Component} from 'react'
import {connect} from 'react-redux'

import styles from './Home.css';
import Brander from './brander.jpg';

import {resetErrorMessage, getUser} from "../../actions";

class Home extends Component {
	componentDidMount(){
		this.props.getUser();
	}
	render() {
		return (
			<div className={styles.hello}>
				hello react.
				<img src={Brander}/>
				<div className={styles.brander}>{'this is brander container'}</div>
			</div>
		);
	}
}

export default connect(null, {
	resetErrorMessage,
	getUser
})(Home);