var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = require('./TodoList.jsx');


var Main = React.createClass({
	getInitialstate:function(){
		return {
			newTodo:""
		}
	},

	handleNewTodoKeyDown:function(evt){
		if(evt.keyCode !== 13){
			return;
		}

		evt.preventDefault();

		var val = this.state.newTodo.trim();//$.trim()函数会移除字符串开始和末尾处的所有换行符，空格(包括连续的空格)和制表符。如果这些空白字符在字符串中间时，它们将被保留，不会被移除。

		if(val){
			console.log(val);
			this.refs.todoApp.onAdd(val);
			this.setState({newTodo:''});
			this.refs.newValue.value = '';
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
						ref="newValue"
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
