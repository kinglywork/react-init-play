import React, {Component} from 'react'
import styles from './Home.css';
import Brander from './brander.jpg';

class Home extends Component {
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

export default Home;