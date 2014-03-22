(function(Readily){

	Readily.Navigation.mkRoute("signup", "#signup", "signup_tmpl.html", function(domId, template) {
		$(domId).html(template());
		
		var html = $(domId).html();
		$(domId).find("form").submit(function(event) {
			return false;
		});
		
		$(domId).find("button").click(function(event) {
			event.preventDefault();
			// Submit en ajax/json
			console.log("SUBMIT");
		});
	});

})(window.Readily);