var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions
	,data:require("./mockdata")
	,cur:0 
	,onFetch:function() {
		console.log('trigger',this.cur)
		this.trigger( this.data[this.cur]);
	}
	,onNext:function() {
		if (this.canNext()) this.cur++;
		this.onFetch();
	}
	,canNext:function() {
		return this.cur<this.data.length-1;
	}
	,canPrev:function() {
		return this.cur>0;
	}
	,onPrev:function() {
		if (this.canPrev()) this.cur--;
		this.onFetch();
	}
});

module.exports=store;