$.fn.selectiveDiv = function(){
	this.click(function(){
		var groupId = $(this).attr('data-group');
		if(groupId){
			var selector = "div[data-group=\""+groupId+"\"]";
			$(selector).each(function(i , v){
				$(this).removeClass("selected");
			});
			$(this).addClass("selected");
		}
	});
};
$.fn.selection = function(groupId){
	var selector = "div[data-group=\""+groupId+"\"]";
	var value;
	$(selector).each(function(i , v){
		if($(this).hasClass("selected")){
			value = $(this).attr("data-value");
		}
	});
	return value;
};


$.fn.multiSelectiveDiv = function(){
	
	this.click(function(){
		if($(this).attr('data-group')){
			if($(this).hasClass("selected")){
				$(this).removeClass("selected");				
			}else{			
				$(this).addClass("selected");
			}
		}
	});
};
$.fn.selections = function(groupId){
	var selector = "div[data-group=\""+groupId+"\"]";
	var values = new Array();
	$(selector).each(function(i , v){
		if($(this).hasClass("selected")){
			values.push($(this).attr("data-value"));
		}
	});
	return values;
};
$.fn.groups = function(){
	var items = {};
	$(this).each(function() {
		var groupId = $(this).attr('data-group');
		if(groupId){
			items[groupId] = true; 
		}
	});

	var result = new Array();
	for(var i in items)
	{
	    result.push(i);
	}
	return result;
}

	