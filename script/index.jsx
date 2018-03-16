var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = require('./TodoList.jsx');


var Main = React.createClass({
	getInitialstate:function(){
		return {
			newTodo:''
		}
	},

	handleNewTodoKeyDown:function(evt){
		if(evt.keyCode !== 13){
			return;
		}

		evt.preventDefault();

		var val = this.state.newTodo.trim();

		if(val){
			console.log(val);
			this.refs.todoApp.onAdd(val);
			this.setState({newTodo:''})
		}

	},

	hanleChange:function(evt){
		this.setState({newTodo:evt.target.value});
	},

	render: function(){
		return (
			<div className="todoapp">
				<header className="header">
					<h1>todolist</h1>
					<input
						className="new-todo"
						placeholder="What needs to be dowm?"
						autoFocus={true}
						onKeyDown={this.handleNewTodoKeyDown}
						onChange={this.hanleChange}
						// value={this.state.newTodo}
					/>
					<TodoList ref="todoApp"/>
				</header>
			</div>
		)
	}
})

ReactDOM.render(<Main />, document.getElementById('main'));
