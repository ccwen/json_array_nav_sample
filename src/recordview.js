var React=require("react");


var Recordview = React.createClass({
	propTypes:{
		record:React.PropTypes.object.isRequired
	}
	,render: function() {
		return <div>
			<div>ID:{this.props.record.id}</div>
			<div>Field1:{this.props.record.f1}</div>
			<div>Field2:{this.props.record.f2}</div>
		</div>;
	}
});
module.exports=Recordview