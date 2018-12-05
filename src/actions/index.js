export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const resetErrorMessage = () => ({
	type: RESET_ERROR_MESSAGE
});

export const getUser = () => (dispatch, getState) => {
	setTimeout(() => dispatch({type: 'API_ERROR', error: 'error occurs when getting user info'}), 2000);
};