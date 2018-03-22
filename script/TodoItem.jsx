var React = require('react');
var ReactDOM = require('react-dom');

//子组件
var TodoItem = React.createClass({
    render: function(){
		return (
			<li className={this.props.completed ? "completed" : ""}>
                <div className="view">
                    <input 
                        type="checkbox"
                        className="toggle"
                        checked={this.props.completed}
                        onChange={this.props.onToggle}//1.单击列表复选框时触发onToggle方法
                        
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
