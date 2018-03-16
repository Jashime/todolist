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

	onToggle:function(id){
		for(var i=0;i<this.state.db.length;i++){
			var item = this.state.db[i];
			if(item.id == id){
				item.completed = !item.completed;//2.onToggle方法遍历列表，改变completed值
				break;
			}
		}
		this.setState(this.state);
	},
	onDestroy:function(id){
		for(var i=0;i<this.state.db.length;i++){
			var item = this.state.db[i];
			if(item.id == id){
				this.state.db.splice(i,1);
				break;
			}
		}
		this.setState(this.state);
	},

	render: function(){//3.触发render方法，重新渲染了TodoItem
		var todos = null;
		todos = this.state.db.map(function(item){
			return <TodoItem 
						key={item.id}
						title={item.title}
						completed={item.completed}
						onToggle={this.onToggle.bind(this,item.id)}
						onDestroy={this.onDestroy.bind(this,item.id)}
					/>
		}.bind(this));
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