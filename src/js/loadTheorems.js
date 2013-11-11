var pathToTheorems = "../data/theorems.json";

function showTheorems() {
	$.getJSON(pathToTheorems, function(data) {
		jQuery('#content').text(data);
	});
}