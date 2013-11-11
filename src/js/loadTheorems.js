var pathToTheorems = "../theorems.json";

function showTheorems() {
	console.log("fff");
	jQuery.get(pathToTheorems, function(data) {
    	theorems = JSON.parse(data);
    	jQuery('#content').text = theorems;
	});
}