window.Readily = window.Readily || {};

(function(Readily){

	var currentDomId = undefined;
	
	function mkRoute(route, domId, callback) {
		crossroads.addRoute(route, function() {
			$(currentDomId).hide();
			$(currentDomId).addClass('hidden');
			
			$(domId).show();
			$(domId).removeClass("hidden");
			
			currentDomId = domId;
			console.log("route: ", route, domId);
			if (callback) { 
				callback();
			}
		});
	}
	
	
	mkRoute("welcome", "#welcome");
	mkRoute("", "#welcome");
	mkRoute("selection", "#selection");
		
	//setup crossroads
	crossroads.addRoute('foo');
	crossroads.addRoute('lorem/ipsum');
	crossroads.routed.add(console.log, console); //log all routes
	 
	//setup hasher
	function parseHash(newHash, oldHash){
	  crossroads.parse(newHash);
	}
	hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change
	
	Readily.Navigation = {
		go: function(route) {
			hasher.setHash(route);
		}
	};
	
	$("a").each(function(i) {
		var self = $(this);
		var nav = self.attr("navigation");
		if (nav) {
			self.click(function(event) {
				event.preventDefault();
				hasher.setHash(nav);
			});
		}
	});
	
})(window.Readily);