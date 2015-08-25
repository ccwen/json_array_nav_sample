var React=require("react");
var Controls=require("./controls");
var RecordView=require("./RecordView");
var store=require("./store");
var Reflux=require("reflux");
var Maincomponent = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]	
	,getInitialState:function(){
		return {data:{} };
	}	
	,onStore:function(data) {
		this.setState({data:data});
	}
  ,render: function() {
    return <div>
      <Controls/>
      <RecordView record={this.state.data}/>
    </div>;
  }
});
module.exports=Maincomponent;