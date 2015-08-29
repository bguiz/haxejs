(function (console) { "use strict";
var Main = function() {
	var _g = this;
	$(function() {
		console.log("NASA images");
		$.ajax({ url : "https://api.nasa.gov/planetary/apod", data : { date : _g.randomDate(), concept_tags : "True", api_key : "DEMO_KEY"}, success : function(data) {
			console.log("data.url : " + data.url);
			console.log("data.media_type : " + data.media_type);
			console.log("data.explanation : " + data.explanation);
			console.log("data.concepts : " + data.concepts);
			console.log("data.title : " + data.title);
			$("#nasa-container").html("<h2>" + data.title + "</h2><img src='" + data.url + "' alt='" + data.title + "' class='img-responsive center-block' ><p>" + data.explanation + "</p>");
		}});
	});
};
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	randomDate: function() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return year + "-" + StringTools.lpad(month == null?"null":"" + month,"0",2) + "-" + StringTools.lpad(day == null?"null":"" + day,"0",2);
	}
};
var StringTools = function() { };
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
