var React = require('react');
var ReactDOM = require('react-dom');

var TodoItem = require('./TodoItem.jsx');
var ids = 0;

var TodoList = React.createClass({
	getInitialState:function(){
		return {
			db:[]
		}
	},

	onAdd:function(val){
		this.state.db.push({title:val,completed:false,id:++ids});
		this.setState(this.state);
	},

	render: function(){
		var todos = null;
		todos = this.state.db.map(function(item){
			return <TodoItem 
						key={item.id}
						title={item.title}
						completed={item.completed}
						/>
		})
		return (
			<section className="main">
				<input 
					className="toggle-all"
					type="checkbox"/>
				<ul className="todo-list">
					{todos}
				</ul>
				
			</section>
		)
	}
})

module.exports = TodoList;