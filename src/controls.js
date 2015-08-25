var React=require("react");
var actions=require("./actions");
var store=require("./store");

var Controls=React.createClass({
  next:function() {
		actions.next();
	}
	,prev:function() {
		actions.prev();
	}
	,componentDidMount:function() {
		actions.fetch();
	}
	,render:function() {
		return <div>
      		<button disabled={!store.canPrev()} onClick={this.prev}>Prev</button>
      		<button disabled={!store.canNext()}onClick={this.next}>Next</button>
      	</div>
	}
});

module.exports=Controls;