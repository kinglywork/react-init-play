import React, {Component} from 'react';
import {connect} from 'react-redux';

import {resetErrorMessage} from "../actions/index";

class ErrorMessage extends Component {
	render() {
		const {error, resetErrorMessage} = this.props;
		return (<div>
			{error}
			{error && (<button onClick={() => resetErrorMessage()}>X</button>)}
		</div>);
	}
}

const mapStateToProps = (state, ownProps) => ({
	error: state.errorMessage
});

export default connect(mapStateToProps, {
	resetErrorMessage
})(ErrorMessage);