var React = require('react');
var ReactDOM = require('react-dom');

var TodoItem = React.createClass({
    render: function(){
		return (
			<li className={this.props.completed?"completed":""}>
                <div className="view">
                    <input 
                        type="checkbox"
                        className="toggle"
                        checked={this.props.completed}
                        onChange={this.props.onToggle}
                    />
                    <label>
                        {this.props.title}
                    </label>
                    <button className="destroy" onClick=
                    {this.props.onDestroy}/>
                </div>
            </li>
		)
	}
})

module.exports = TodoItem;