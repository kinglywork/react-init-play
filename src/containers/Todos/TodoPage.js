import React from 'react';

import AddTodo from './AddTodo';
import Footer from '../../components/Todos/Footer';
import VisibleTodoList from './VisibleTodoList';

export default () => (
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
	</div>
);