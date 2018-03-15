var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = React.createClass({
	getInitialState:function(){
		return {
			db:[]
		}
	},

	onAdd:function(val){
		
	},

	render: function(){
		return (
			<section className="main">
				todolist
			
			</section>
		)
	}
})

module.exports = TodoList;