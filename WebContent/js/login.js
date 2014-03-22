(function(Readily){

	Readily.Navigation.mkRoute("/signup", "#signup", "signup_tmpl.html", function(domId, template) {
		$(domId).html(template());
	});

})(window.Readily);