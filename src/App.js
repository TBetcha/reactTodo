/** @format */

import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Take out the trash',
				completed: false,
			},
			{
				id: uuid.v4(),
				title: 'Study React',
				completed: true,
			},
			{
				id: uuid.v4(),
				title: 'Eat Dinner',
				completed: false,
			},
		],
	};

	//delete todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	//add todo
	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	//toggle complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	render() {
		console.log(this.state.todos);
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}
export default App;
